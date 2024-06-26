const { default: Enum } = _Enum;
const { PureGlobal } = global;
const { Space, Select } = antd;
const BaseExample = () => {
  return (
    <PureGlobal
      preset={{
        locale: "zh-CN",
        enums: {
          testEnums: async ({ locale }) => {
            console.log(locale);
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve([
                  { value: "1", description: "第一项" },
                  { value: "2", description: "第二项" },
                  {
                    value: "3",
                    description: "第三项",
                  },
                ]);
              }, 1000);
            });
          },
        },
      }}
    >
      <Space>
        <Enum moduleName="gender" name="M">
          {(data) => data.description}
        </Enum>
        <Enum moduleName="testEnums" name="1">
          {(data) => data.description}
        </Enum>
        <Enum moduleName="testEnums" name="2">
          {(data) => data.description}
        </Enum>
        <Enum moduleName="testEnums">
          {(list) => {
            return (
              <Select
                placeholder="请选择"
                options={list.map((item) => ({
                  value: item.value,
                  label: item.description,
                }))}
              />
            );
          }}
        </Enum>
      </Space>
    </PureGlobal>
  );
};

render(<BaseExample />);
