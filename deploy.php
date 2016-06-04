<?php
require 'recipe/symfony3.php';

//Define a server for deployment.
server('prod', 'lilburnsupersonics.com',7822 )
    ->user('root')
    ->password('alexHaley1')
    ->stage('production')
    ->env('deploy_path','/var/www/html');

set('repository', 'git@github.com:jtolbert1975/lilburnsupersonicsMVC.git');

set('shared_dirs', ['app/logs']);
set('shared_files', ['app/config/parameters.yml']);
set('writable_dirs', ['app/cache', 'app/logs']);
//Assets
set('assets', ['web/css', 'web/img', 'web/scripts']);



?>