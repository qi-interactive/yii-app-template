<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="en" />
    <meta HTTP-EQUIV="Pragma" CONTENT="no-cache">
    <meta HTTP-EQUIV="Expires" CONTENT="-1">

    <link rel="stylesheet/less" type="text/css" href="/css/main.less" />

    <script>
        less = {env:'development'}; 
    </script>
    <script src="/js/base/less/less.js" type="text/javascript"></script>
    

    <script type="text/javascript" src="/js/base/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="/js/main.js"></script>

    <title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>

<body>

    <div id="main">
        <?php echo $content; ?>
    </div>
</body>
</html>