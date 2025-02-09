import { useTypedSelector } from "../../../store/hooks";

const usePluginInstanceResource = () => {
  const selectedPlugin = useTypedSelector((state) => state.feed.selectedPlugin);
  const pluginInstancePayload = useTypedSelector(
    (state) => state.feed.pluginInstanceResource
  );
  const id = selectedPlugin?.data.id;
  const pluginInstanceResource =
    pluginInstancePayload && id && pluginInstancePayload[id];
  return pluginInstanceResource;
};

export default usePluginInstanceResource;
