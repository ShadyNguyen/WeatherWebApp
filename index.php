<?php

function compareTriplets($a, $b) {
    $aliceScore = 0;
    $bobScoce = 0;
    for ($i = 0; $i < 3; $i++) {
        if($a[$i] > $b[$i]) {
         $aliceScore++;
        } else if ($a[$i] < $b[$i]) {
          $bobScoce++;
      }
        
    }
    return [$aliceScore, $bobScoce];
}

?>