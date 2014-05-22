<?php

class Scrollbar extends BaseWidget {


	public function init() {
		$this->publishAssets(__DIR__);
	}

	public function run() {
		$this->renderDefaultView(__FILE__);
	}

}
