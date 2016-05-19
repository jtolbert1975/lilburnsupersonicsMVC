<?php

namespace SponsorsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class SponsorsController extends Controller
{
    /**
     * @Route("/lilburnsupersonics/sponsors/sponsors")
     */
    public function indexAction()
    {
        return $this->render('lilburnsupersonics/sponsors/sponsors.html.twig');
    }
}
