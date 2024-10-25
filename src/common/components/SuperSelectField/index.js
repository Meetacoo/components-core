import { forwardRef } from "react";
import SuperSelect, {
  SelectedTagList,
  SelectTableList,
} from "@kne/super-select";
import Modal from "@components/Modal";
import Image from "@components/Image";
import { Flex } from "antd";
import "@kne/super-select/dist/index.css";

const SuperSelectField = forwardRef((p, ref) => {
  const props = Object.assign(
    {},
    {
      children: ({ components }) => {
        return (
          <Flex vertical>
            {components.search}
            {components.selectedAll}
            {components.fetchList}
            {props.isPopup !== false && components.selectedTag}
          </Flex>
        );
      },
      renderModal: (contextProps) => {
        const { props, open, onOpenChange, value, onComplete } = contextProps;
        const { placeholder, children, showSelectedTag, onConfirm } = props;
        return (
          <Modal
            title={placeholder}
            open={open}
            onClose={() => {
              onOpenChange(false);
            }}
            footer={showSelectedTag && <SelectedTagList />}
            onConfirm={() => {
              onComplete();
              if (typeof onConfirm === "function") {
                return onConfirm(value);
              }
            }}
          >
            {children(contextProps)}
          </Modal>
        );
      },
    },
    p
  );

  return <SuperSelect {...props} ref={ref} />;
});

export default SuperSelectField;

export const SuperSelectTableListField = forwardRef((p, ref) => {
  const props = Object.assign(
    {},
    {
      renderModal: (contextProps) => {
        const { props, open, value, onOpenChange, onComplete } = contextProps;
        const { placeholder, children, onConfirm } = props;
        return (
          <Modal
            title={placeholder}
            open={open}
            onClose={() => {
              onOpenChange(false);
            }}
            onConfirm={() => {
              onComplete();
              if (typeof onConfirm === "function") {
                return onConfirm(value);
              }
            }}
          >
            {children(contextProps)}
          </Modal>
        );
      },
    },
    p
  );
  return <SelectTableList {...props} ref={ref} />;
});

export const SuperSelectUserField = forwardRef((p, ref) => {
  return (
    <SuperSelectField
      {...p}
      ref={ref}
      renderItemContent={({ item, props }) => {
        const { labelKey } = props;
        return (
          <Flex gap={8}>
            <Image.Avatar
              {...Object.assign({}, item.avatar)}
              size={40}
              gender="M"
            />
            <div>
              <div className={"select-list-item-label"}>{item[labelKey]}</div>
              {item.description && (
                <div className={"select-list-item-description"}>
                  {item.description}
                </div>
              )}
            </div>
          </Flex>
        );
      }}
    />
  );
});
