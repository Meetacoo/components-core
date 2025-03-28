const { default: File } = _File;
const { PureGlobal } = global;
const { getPublicPath } = remoteLoader;
const BaseExample = () => {
  return <File id="qqq">{({ url }) => url}</File>;
};

render(
  <PureGlobal
    preset={{
      apis: {
        file: {
          getUrl: {
            loader: async ({ params }) => {
              console.log(params);
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve(getPublicPath("components-core") + "/avatar.png");
                }, 1000);
              });
            },
          },
        },
      },
    }}
  >
    <BaseExample />
  </PureGlobal>
);
