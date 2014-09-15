<?php 

class SocialIconWidget extends BaseWidget {

	public static $FACEBOOK = "facebook";
	public static $TWITTER = "twitter";
	public static $LINKEDIN = "linkedIn";
	public static $GOOGLE_PLUS = "google-plus";

	public $iconWidth = 38;
	public $iconHeight = 38;


	/**
	 * We are expecting a file with icons in single column, with the following order: 
	 * twitter off
	 * twitter on 
	 * facebook off
	 * facebook on
	 * linkedIn off
	 * linkedIn on
	 * google+ off
	 * google+ on
	 * @var [type]
	 */
	public $spriteURL;

	public $socialNetwork;

	public function init() {
		if ($this->socialNetwork == null)
			throw new CHttpException(500, "Social Network has to be specified");
	}

	public function run() {

		$yPosition = null;

		switch ($this->socialNetwork) {
			case self::$TWITTER:
			$yPosition = 0;
			break;

			case self::$FACEBOOK:
			$yPosition = $this->iconHeight * 2;
			break;

			case self::$LINKEDIN:
			$yPosition = $this->iconHeight * 4;
			break;

			case self::$GOOGLE_PLUS:
			$yPosition = $this->iconHeight * 6;
			break;
			
			default:
				throw new CHttpException(500, "Social network not supported " . $this->socialNetwork);
			break;
		}


		Yii::app()->clientScript->registerCSS(__FILE__, 
			".socialIcon {width: " . $this->iconWidth . "px; height: " . $this->iconHeight .
			 "px; background: url(" . $this->spriteURL . ") no-repeat; background-size: cover;}");

		Yii::app()->clientScript->registerCSS(__FILE__ . $this->socialNetwork, 
			".socialIcon." . $this->socialNetwork . 
			"{background-position-y: -" . $yPosition . "px} " .
			".socialIcon." . $this->socialNetwork . 
			 ":hover {  background-position-y: -" . ($yPosition + $this->iconHeight) . "px; }");

		echo "<div class='socialIcon " . $this->socialNetwork . "'></div>";
	}


}