<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="en" />
    <meta HTTP-EQUIV="Pragma" CONTENT="no-cache">
    <meta HTTP-EQUIV="Expires" CONTENT="-1">

    <link rel="stylesheet" type="text/css" href="/css/main.css" />

    <!--[if lt IE 9]>  
    <link rel="stylesheet" type="text/css" href="/css/ie8.css" />
    <![endif]-->

    <script type="text/javascript" src="/js/base/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="/js/base/helpers.js"></script>
    <script type="text/javascript" src="/js/main.js"></script>

    <title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>

<body>

    <div id="main">
        <?php echo $content; ?>
    </div>
</body>
</html>