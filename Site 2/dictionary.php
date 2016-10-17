<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of dictionary
 *
 * @author WroOth
 */
$dictonary =[
    
  'onet.pl'     =>   'http://onet.pl',
  'wp.pl'       =>   'http://wp.pl',
  'google.pl'   =>   'http://google.pl',
  'interia.pl'  =>   'http://interia.pl',
  'facebook.pl' =>   'http://facebook.pl',
  'nasza-klasa' =>   'http://nk.pl',
    
    
];

$search = trim($_GET['search']);

$result =[];
if (!empty($search)){
foreach ($dictonary as $key => $val){
    
    if (strpos($key, $search) !== false){
        
       $result[$key] = $val; 
    }
    
}
}

echo json_encode($result);
