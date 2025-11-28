<?php
$produkt = [
    
];
?>
<!doctype html>
<html lang="sv">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Olles AB — Om oss</title>
    <link rel="stylesheet" href="style/merch.css">
</head>
<body>
  <div class="container">
    <header>
        <a href="index.html">Hem</a> | <a href="Contact.html">Kontakta oss</a>
        <h1>Olles AB</h1>
        <p>Företaget är verksamt sedan 1948. Organisation: STYR (3), PROD (10), UTV (3), IT (1), SALG (2).</p>
    </header>

    <section class="grid" aria-label="Medarbetare">
      <?php foreach($produkt as $p): ?>
        <article class="card" role="article">
          <img src="<?=htmlspecialchars($p['img'])?>" alt="<?=htmlspecialchars($p['name'])?>">
          <h3><?=htmlspecialchars($p['name'])?></h3>
        </article>
      <?php endforeach; ?>
    </section>
  </div>
<footer>
            
</footer>
</body>
</html>