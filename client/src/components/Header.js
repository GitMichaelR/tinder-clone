import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import red from '@material-ui/core/colors/red';

function Header() {
    return ( 
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>
            <IconButton>
                <WhatshotIcon style = {{color: red[500]}}fontSize="large" className="header_logo"/>
            </IconButton>
            <IconButton>
                <QuestionAnswerIcon fontSize="large" className="header_icon"/>
            </IconButton>
        </div>
    );
};

export default Header;