<?php
header("Content-Security-Policy: " .
       "default-src 'self'; img-src https://*; " .
       "child-src 'none'; " .
       "style-src 'self' https://fonts.googleapis.com/css; " .
       "font-src 'self' https://fonts.gstatic.com/s/specialelite/v7/9-wW4zu3WNoD5Fjka35JmwYWpCd0FFfjqwFBDnEN0bM.woff2"
);
header('X-Frame-Options: SAMEORIGIN');
header('X-XSS-Protection: 1; mode=block');
header('Referrer-Policy: no-referrer');
?>
<!DOCTYPE html>
<html lang="en-GB" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
<head>
  <title>PwGen</title>
  <link type="image/x-icon" rel="shortcut icon" href="logo.png">
  <link href="https://fonts.googleapis.com/css?family=Special+Elite" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="manifest" href="manifest.json">
  <link rel="stylesheet" type="text/css" href="style.css">
  <script lang="javascript" src="script.js" ></script>
</head>
<body>
</body>
</html>
