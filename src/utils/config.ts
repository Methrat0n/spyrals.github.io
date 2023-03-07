const configJson = require('../../config.json')

interface Config {
  url: string
  svg_path: string
  img_path: string
  logo: string
  logo_alt: string
  telephone: string
  mail: string
  home_title: string
  home_description: string
  menu: {
    label_1: string
    link_1: string
    label_2: string
    link_2: string
    label_3: string
    link_3: string
    label_4: string
    link_4: string
  }
  footer: {
    label_1: string
    label_2: string
    label_3: string
    link_3: string
    label_4: string
    link_4: string
    hosted_text: string
    hosted_link: string
    hosted_logo: string
    hosted_alt: string
  }
  spyrals: {
    title: string
    text: string
    button_link: string
    button_label: string
    img1: string
    img1_alt: string
    img2: string
    img2_alt: string
  }
  offer: {
    title: string
    text: string
    button_label: string
    button_link: string
    card1_title: string
    card1_text: string
    card2_title: string
    card2_text: string
    card3_title: string
    card3_text: string
  }
  skills: {
    title: string
    gallery: [
      {
        img: string
        alt: string
      }
    ],
    colors: string[]
    rotation: string[]
    translate: string[]
  }
  team: {
    title: string
    text: string
    arrow: string
    members: [
      {
        name: string
        text: string
        img: string
      }
    ]
    colors: string[]
  }
  customers: {
    title: string
    text: string
    gallery: [
      {
        logo: string
        link: string
      }
    ]
  }
  worklife: {
    title: string
    text: string
    arrow: string
    gallery: [
      {
      img: string
      alt: string
      height: string
      width: string
      }
    ]
    colors: string[]
    rotation: string[]
    translate: string[]
    zIndex: string[]
  }
  contact: {
    title: string
    text: string
    button_label: string
    button_link: string
    phone_icon: string
    mail_icon: string
    img1: string
    img1_alt: string
    img2: string
    img2_alt: string
  }
  fixed: {
    contact_text: string
    contact_link: string
    contact_img: string
    contact_img_alt: string
    video_text: string
    video_link: string
    video_img: string
    video_img_alt: string
  }
  contactForm: {
    title: string
    text: string
    phone_icon: string
    phone_alt: string
    img: string
    img_alt: string
    label_firstname: string
    label_name: string
    label_mail: string
    label_phone: string
    label_company: string
    label_request: string
    label_submit: string
  }
  socials: {
    facebook_link: string
    facebook_logo_white: string
    facebook_logo_black: string
    linkedin_link: string
    linkedin_logo_white: string
    linkedin_logo_black: string
  }
}

export default configJson as Config
