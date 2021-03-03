import "./Buttons.css";
import IconButton from "@material-ui/core/IconButton";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

function Buttons() {
  return (
    <div className="Buttons">
      <IconButton className="Buttons_repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="Buttons_left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="Buttons_star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="Buttons_right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="Buttons_lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Buttons;
