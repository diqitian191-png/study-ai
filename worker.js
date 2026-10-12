<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>测试</title>
<style>
body{font-family:sans-serif;padding:20px;background:#f5f7fb}
h1{color:#3b6ef6}
button{display:block;width:100%;padding:16px;font-size:18px;margin:10px 0;border:1px solid #ccc;border-radius:10px;background:#fff;color:#000}
</style>
</head>
<body>
<h1>测试页面</h1>
<p>如果你能点下面的按钮并看到变化，说明环境正常。</p>
<button onclick="test()">点我测试</button>
<p id="result">等待点击…</p>
<script>
function test(){
document.getElementById('result').innerHTML='✅ 成功！JavaScript 能运行。';
}
</script>
</body>
</html>
