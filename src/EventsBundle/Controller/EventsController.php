<?php

namespace EventsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class EventsController extends Controller
{
    /**
     *  @Route("/lilburnsupersonics/events" )
     */
    public function showAction()
    {
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



        return $this->render('lilburnsupersonics/events.html.twig', array(
            'days' => $days, 'sunday'=> $days[0], 'monday' => $days[1],
            'tuesday' => $days[2], 'wednesday' => $days[3], 'thurs'=> $days[4], 'fri' => $days[5],
            'saturday' => $days[6]
            ));

    }


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
