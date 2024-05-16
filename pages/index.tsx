import useTranslation from "next-translate/useTranslation";
const Home: React.FC = ({}) => {
  const { t, lang } = useTranslation("common");
  console.log(t("common:title"));
  return <></>;
};
export default Home;
