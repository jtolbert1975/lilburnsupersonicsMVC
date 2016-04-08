<?php
/**
 * Created by PhpStorm.
 * User: jonathan.tolbert
 * Date: 1/17/16
 * Time: 7:27 PM
 */


namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Response;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use \Symfony\Bundle\FrameworkBundle\Controller\Controller;


class LilburnSupersonics extends Controller
{
    /**
     * @Route("/lilburnsupersonics/{sonicsName}" )
     */

    public function showAction($sonicsName)
    {

        $notes = [
            'The Lilburn Supersonics are the greatest',
            'They to come to play hard every night'
        ];

        $days = $this->weekDate();

        $daysrtn =[
            $sunday = $days[0],
            $monday = $days[1],
            $tuesday = $days[2],
            $wed = $days[3],
            $thurs = $days[4],
            $friday = $days[5],
            $saturday = $days[6]
        ];

        //var_dump($days);

        //, 'sunday'=> $daysrtn.sunday, 'saturday'=> $daysrtn.saturday


        //$templating = $this->container->get('templating');
        return $this->render('lilburnsupersonics/home.html.twig', array(
                'name'=>$sonicsName, 'days' => $days, 'sunday'=> $days[0], 'monday' => $days[1],
            'tuesday' => $days[2], 'wednesday' => $days[3], 'thurs'=> $days[4], 'fri' => $days[5],
            'saturday' => $days[6]
            ));
        //return new Response("Lilburn SuperSonics" .$sonicsName);
        //return new Response($html);
    }

    /*  public function indexAction(){
          return $this->render('default/index.html.twig');
      }*/

    public function weekDate(){

        $day = date('w');
        $week_start = date('m-d-y', strtotime('-' .$day.' days'));
        $week_monday = date('m-d-y', strtotime('+' .(1-$day). ' days'));
        $week_tues = date('m-d-y', strtotime('+' .(2-$day). ' days'));
        $week_wed = date('m-d-y', strtotime('+' .(3-$day). ' days'));
        $week_thurs = date('m-d-y', strtotime('+' .(4-$day). ' days'));
        $week_friday = date('m-d-y', strtotime('+' .(5-$day). ' days'));
        $week_end = date('m-d-y', strtotime('+' .(6-$day). ' days'));

        $days = array($week_start,
            $week_monday,
            $week_tues,
            $week_wed ,
            $week_thurs,
            $week_friday,
            $week_end);

        return $days;
    }

}