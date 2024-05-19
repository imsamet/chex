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
    case "Die1":
      return <Icon.Die1 {...props} />;
      break;
    case "Die2":
      return <Icon.Die2 {...props} />;
      break;
    case "Die3":
      return <Icon.Die3 {...props} />;
      break;
    case "Die4":
      return <Icon.Die4 {...props} />;
      break;
    case "Die5":
      return <Icon.Die5 {...props} />;
      break;
    case "Die6":
      return <Icon.Die6 {...props} />;
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
    case "Menu":
      return <Icon.Menu {...props} />;
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
