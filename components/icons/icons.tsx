import { IconProps } from "./_model";
import * as Icon from "./index";

const Icons: React.FC<IconProps> = ({ name, ...props }) => {
  switch (name) {
    case "Check":
      return <Icon.Check {...props} />;
      break;
    case "Cross":
      return <Icon.Cross {...props} />;
      break;
    case "En":
      return <Icon.En {...props} />;
      break;
    case "Figma":
      return <Icon.Figma {...props} />;
      break;
    case "Github":
      return <Icon.Github {...props} />;
      break;
    case "Left":
      return <Icon.Left {...props} />;
      break;
    case "Linkedin":
      return <Icon.Linkedin {...props} />;
      break;
    case "Logo":
      return <Icon.Logo {...props} />;
      break;
    case "Refresh":
      return <Icon.Refresh {...props} />;
      break;
    case "Right":
      return <Icon.Right {...props} />;
      break;
    case "Sms":
      return <Icon.Sms {...props} />;
      break;
    case "Tr":
      return <Icon.Tr {...props} />;
      break;
    case "Trush":
      return <Icon.Trush {...props} />;
      break;
    case "Phone":
      return <Icon.Phone {...props} />;
      break;
    default:
      break;
  }
};
export default Icons;
