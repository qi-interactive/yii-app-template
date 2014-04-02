<?php 

class Slider extends BaseWidget {

	public function init() {
		$this->publishAssets(__DIR__);
		Yii::app()->getClientScript()->registerCssFile($this->assetsBase . '/css/web.slider.css');
		Yii::app()->getClientScript()->registerScriptFile($this->assetsBase . '/js/web.slider.js');

		ob_start();
	}

	public function run() {
		$content = ob_get_clean();

		if ($content == null)
			$content = $this->render("widgets.web.slider.views.defaultContent", array(), true);

		Yii::app()->getClientScript()->registerScript(__CLASS__ . '#' . $this->id, 
			"var $this->id = $('#{$this->id}').webSlider()", CClientScript::POS_LOAD);

		$this->renderDefaultView(__FILE__, array(
			"content" => $content
			));
	}
}