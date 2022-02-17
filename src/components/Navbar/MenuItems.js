import { faDiscord, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MenuItems = [
    {
        title: 'Linkedin',
        url: 'https://www.linkedin.com/in/christian-tavares13/',
        cName: 'nav-links',
        icon: <FontAwesomeIcon icon={faLinkedin}/>
    },
    {
        title: 'Facebook',
        url: '#',
        cName: 'nav-links',
        icon: <FontAwesomeIcon icon={faFacebook}/>
    },
    {
        title: 'Discord',
        url: 'https://discord.gg/jZcEfsaRuX',
        cName: 'nav-links',
        icon: <FontAwesomeIcon icon={faDiscord}/>
    },
    

]