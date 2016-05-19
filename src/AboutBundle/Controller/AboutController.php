<?php

namespace AboutBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class AboutController extends Controller
{
    /**
     * @Route("/lilburnsupersonics/about/about")
     */
    public function showAction()
    {
        return $this->render('lilburnsupersonics/about/about.html.twig');
    }
}
