import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projets=[
    {title:" Création application d'animation 2D",
    budget:"479.000 F CFA",
    competences:"Wordpress angular full stack",
    description:"Je recherche une personne qui pourrait programmer un logiciel d'animation 2D "
  },
    {title:"Cherche expert WP pour optimisation et maintenance de site e-commerceux",
    budget:"379.000 F CFA",
    competences:"WordPress WooCommerce Site E-commerce",
    description:"Cherche un expert WP pour nous aider dans la maintenance et l'amélioration de notre site e-commerce basé sous WP et woocommerce ..."
  },
  {
    title:"Cherche commerciaux H/F permis et véhicule pour île de france vente de",
    budget:"200.000 F CFA",
    competences:"Prospection commerciale",
    description:"publicité tel et rdv forte commission 3 d'expérience bac+2 forte commission statut auto entrepreneur ou agents commerciaux "
  }
]



projetsEncours=[
  {
    title:"Site de E-Commerce",
    client:"Kouakou",
    freelance:"Sam Ruffin",
    date_debut:"2022-04-18",
    date_fin:"2022-08-18"
  },
  {
    title:"Site Vitrine",
    client:"Some",
    freelance:"Traore ",
    date_debut:"2022-05-04",
    date_fin:"2022-10-11"
  },
  {
    title:"Site Vitrine",
    client:"Some",
    freelance:"Traore ",
    date_debut:"2022-05-04",
    date_fin:"2022-10-11"
  },
  {
    title:"Site de E-Commerce",
    client:"Kouakou",
    freelance:"Sam Ruffin",
    date_debut:"2022-04-18",
    date_fin:"2022-08-18"
  },
  
  {
    title:"Site de E-Commerce",
    client:"Kouakou",
    freelance:"Sam Ruffin",
    date_debut:"2022-04-18",
    date_fin:"2022-08-18"
  },
  
  {
    title:"Site de E-Commerce",
    client:"Kouakou",
    freelance:"Sam Ruffin",
    date_debut:"2022-04-18",
    date_fin:"2022-08-18"
  },

]


}
