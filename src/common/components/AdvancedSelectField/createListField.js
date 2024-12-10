import SelectInnerInput from "@common/components/SelectInnerInput";
import commonStyle from "@common/components/SelectInnerInput/common.module.scss";
import ScrollLoader from "@common/components/ScrollLoader";
import classnames from "classnames";
import get from "lodash/get";
import merge from "lodash/merge";
import style from "./create-list.module.scss";
import SearchInput from "@common/components/SearchInput";
import { Col, Row, Flex, Checkbox, Typography, Space } from "antd";
import { FormattedMessage, useIntl } from "@components/Intl";

const useSelectInnerContext = SelectInnerInput.useContext;

const createListField = ({ renderList, defaultProps }) => {
  const ListInner = ({ value, setValue }) => {
    const { fetchApi, searchText, setSearchText, props, mapping } =
      useSelectInnerContext();
    const pagination = Object.assign(
      {},
      {
        paramsType: "data",
        current: "currentPage",
        pageSizeName: "perPage",
        pageSize: 20,
      },
      props.pagination
    );
    const current = get(
        fetchApi.requestParams,
        [pagination.paramsType, pagination.current],
        1
      ),
      pageSize =
        get(fetchApi.requestParams, [
          pagination.paramsType,
          pagination.pageSizeName,
        ]) || pagination.pageSize;
    const { formatMessage } = useIntl({ moduleName: "Common" });
    const formatData = props.dataFormat(fetchApi.data);
    const { right, leftBottom, leftSpan = 24 } = props;
    const isSelectedAll = value.length === 1 && value[0] === "all";

    const renderInner = () => {
      const renderProps = {
        props,
        value,
        setValue,
        list: formatData.list,
        data: fetchApi.data,
        fetchApi,
        itemIsSelected: (item) => value.indexOf(item.value) > -1,
        isSelectedAll,
        onSelect: (item) => {
          if (props.single) {
            setValue([item.value]);
            return;
          }
          const newValue = value.slice(0);
          const index = newValue.indexOf(item.value);
          if (index > -1) {
            newValue.splice(index, 1);
          } else {
            newValue.push(item.value);
          }
          setValue(newValue);
        },
      };

      const inner = renderList(renderProps);

      if (typeof props.dropdownRender === "function") {
        return props.dropdownRender(
          Object.assign({}, renderProps, { children: inner })
        );
      }

      return inner;
    };

    return (
      <Row
        wrap={false}
        className={right ? classnames("is-not-full", style["is-not-full"]) : ""}
      >
        <Col
          span={leftSpan}
          className={classnames(style["left"], "advance-select-left")}
        >
          {props.getSearchProps ? (
            <SearchInput
              isPopup={props.isPopup}
              className={classnames(
                style["search-input"],
                commonStyle["search-input"],
                {
                  [commonStyle["is-popup"]]: props.isPopup,
                }
              )}
              placeholder={
                props.searchPlaceholder || formatMessage({ id: "search" })
              }
              value={searchText}
              onSearch={(value) => {
                fetchApi.reload(props.getSearchProps(value));
                setSearchText(value);
              }}
            />
          ) : null}
          {!props.single &&
          (props.showSelectedCount || props.allowSelectAll) ? (
            <Flex
              className={classnames(style["list-header"], {
                [style["is-modal"]]: !props.isPopup,
              })}
              justify="space-between"
            >
              {props.showSelectedCount ? (
                <Space>
                  <Typography>已选:</Typography>
                  <Typography.Link>
                    {isSelectedAll
                      ? props.allLabel || (
                          <FormattedMessage id="all" moduleName="Common" />
                        )
                      : `${value.length}${
                          props.countUnit || formatMessage({ id: "items" })
                        }`}
                  </Typography.Link>
                </Space>
              ) : (
                <div />
              )}
              {props.allowSelectAll ? (
                <div>
                  <Checkbox
                    checked={isSelectedAll}
                    onChange={(e) => {
                      setValue(
                        e.target.checked ? [props.allValue || "all"] : []
                      );
                    }}
                  >
                    <FormattedMessage
                      id="selectAll"
                      moduleName="Common"
                      values={{
                        label: props.allLabel || (
                          <FormattedMessage id="all" moduleName="Common" />
                        ),
                      }}
                    />
                  </Checkbox>
                </div>
              ) : (
                <div />
              )}
            </Flex>
          ) : null}
          <ScrollLoader
            completeTips=""
            isLoading={!fetchApi.isComplete}
            className={classnames(style["scroll-loader"], {
              [style["is-popup"]]: props.isPopup,
            })}
            noMore={!formatData.total || current * pageSize >= formatData.total}
            onLoader={async () => {
              console.log("on loader");
              await fetchApi.loadMore(
                merge(
                  {
                    [pagination.paramsType]: {
                      [pagination.pageSizeName]: pageSize,
                      [pagination.current]: current + 1,
                    },
                  },
                  props.getSearchProps && props.getSearchProps(searchText)
                ),
                props.mergeList
              );
            }}
          >
            {renderInner()}
          </ScrollLoader>
          {leftBottom &&
            leftBottom({
              fetchApi,
              value,
              mapping,
            })}
        </Col>
        {right &&
          right({
            value,
            mapping,
            fetchApi,
          })}
      </Row>
    );
  };

  const listFieldDefaultProps = Object.assign(
    {},
    {
      isPopup: true,
      pagination: {},
      mergeList: (data, newData) => {
        return Object.assign({}, newData, {
          pageData: data.pageData.concat(newData.pageData),
        });
      },
      dataFormat: (data) => {
        return {
          list: data.pageData,
          total: data.totalCount,
        };
      },
    },
    defaultProps
  );

  const ListField = ({ extra, ...props }) => {
    return (
      <SelectInnerInput
        {...Object.assign({}, listFieldDefaultProps, props)}
        extra={extra}
      >
        {({ value, setValue }) => {
          return <ListInner value={value} setValue={setValue} />;
        }}
      </SelectInnerInput>
    );
  };

  return ListField;
};

export default createListField;
