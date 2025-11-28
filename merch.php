<?php
$produkt = [
  [ 'img' => 'https://cdn.pixabay.com/photo/2020/07/30/09/00/tent-5449836_960_720.png', 'name' => 'Tält', 'price' => '499 kr' ],
  [ 'img' => 'https://shoplab.b-cdn.net/skistar_production/media-library/24073/A581543_c_1.png', 'name' => 'Stormkök', 'price' => '299 kr' ],
  [ 'img' => 'https://purepng.com/public/uploads/large/purepng.com-motorcyclemotorcyclemotorbikebikecycleracing-bike-17015275103511jxam.png', 'name' => 'Motorcykel', 'price' => '19 900 kr' ],
  [ 'img' => 'https://shop.lindroths.se/storage/product_images/5/PremierHjalmTyphoonFRY9BM_D445935_c601dceec4c8381ef745bcbd47ce56c2_1.png', 'name' => 'Hjälm', 'price' => '899 kr' ],
  [ 'img' => 'https://deliciasculinarias.com.br/wp-content/uploads/2019/12/torresmo-hist%C3%B3ria-da-gastronomia-no-brasil-300x197.png', 'name' => 'VildsvinKött', 'price' => '149 kr' ],
  [ 'img' => 'https://pngimg.com/uploads/knife/knife_PNG106121.png', 'name' => 'Kniv', 'price' => '249 kr' ],
];
?>
<!doctype html>
<html lang="sv">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>WildHogs</title>
    <link rel="stylesheet" href="merch.css">
    
    <script src="merch.js" defer></script>
</head>

<body>
 
  <div class="overlay" aria-hidden="true"></div>

  <div class="container">
    <header>
        <a href="index.html">Hem</a> | <a href="about.html">Kontakta oss</a>
        <h1>WildHogs</h1>
        <p>Dessa är våra högkvalitativa produkter!</p>
    </header>

    <section class="photos" aria-label="Produkter">
      <?php foreach($produkt as $p): ?>
        <article class="card" role="article" tabindex="0">
          <img src="<?=htmlspecialchars($p['img'])?>" alt="<?=htmlspecialchars($p['name'])?>">
          <h3><?=htmlspecialchars($p['name'])?></h3>
          <span class="price"><?=htmlspecialchars($p['price'])?></span>
        </article>
      <?php endforeach; ?>
    </section>
  </div>
<footer>
            
</footer>
</body>
</html>