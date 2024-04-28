import i18next  from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next'

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'EN',
        interpolation:{
            escapeValue: false
        },
        detection:{
            order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['cookie', 'localStorage']
        },
        resources:{
            EN:{
                translation:{
                    // AboutUs
                    about_us_a_brand_leader: 'A Brand Leader',
                    about_us_p1: 'Offering the most powerful portfolio in the industry, our over 30 brands and nearly  8,700 properties across 139 countries and territories give people more ways to connect, experience and expand their world.',
                    about_us_reception: 'Reception',
                    about_us_Tel_No: 'Tel.No.:',
                    about_us_Booking_department: 'Booking department',
                    about_us_Core_Values_Heritage: 'Core Values & Heritage',
                    about_us_p2: 'Founded by J. Willard and Alice Marriott, and guided by family leadership since 1927,their principles remain embedded in the company’s culture and in everything we do today.',
                    about_us_Company_Strategy: 'Company Strategy',
                    about_us_p3: 'Our Growing Forward strategy encapsulates our company priorities, rooted in our core values, and guides us as we deliver on the promise of Marriott’s unique brand of hospitality around the world.',
                    about_us_Diversity_Inclusion: 'Diversity & Inclusion',
                    about_us_p4: 'Diversity and inclusion is fundamental to our core values and strategic business goals. Taking care of people and their well-being is our most precious cultural inheritance.',
                    about_us_Sustainability_Social_Impact: 'Sustainability & Social Impact',
                    about_us_p5: 'Guided by our sustainability and social impact platform, Serve 360: Doing Good in Every Direction, Marriott International commits to creating positive and sustainable impact wherever we do business.',
                    //Booking
                    booking_form: 'Book a Room',
                    booking_start_date: 'Choose Start Date:',
                    booking_end_date: 'Choose End Date:',
                    booking_room: 'Choose Room:',
                    booking_submit: 'Submit',
                    bookingBookings: 'Bookings',
                    bookingStartdate: 'Start date:',
                    bookingEnddate: 'End date:',
                    bookingRoom: 'Room:',
                    bookingDeletereservation: 'Delete reservation',
                    // Contact From
                    ContactUs: 'Contact Us',
                    Submit: 'Submit',
                    ContactFormPlaceholderName: 'Name',
                    ContactFormPlaceholderMessage: 'Message',
                    //Footer
                    Links: 'Links',
                    MainPage: 'Main page',
                    AboutUs: 'About us',
                    FooterContactUs: 'Contact us',
                    SocialMedia: 'Social Media',
                    Contact: 'Contact',
                    AllRightsReserved: '2024 Sol Hotel. All rights reserved.',
                    //Form
                    Login:'Login',
                    Password: 'Password',
                    //Header
                    BookNow: 'Book Now',
                    OurRooms: 'Our Rooms',
                    HeaderContactUs: 'Contact Us',
                    HeaderLogin: 'Login',
                    HeaderLogOut: 'Log Out',
                    //Location
                    LocationText:`The building, whose architecture refers to the style of a 
                    seaside villa, is located on the main communication route 
                    of the Tri-City, and at the same time right next to the 
                    Aquapark and only 250 m from the sandy beach. The hotel 
                    has 50 rooms. On its premises there is the Aquarella 
                    Restaurant, serving European cuisine and 3 conference rooms.`,
                    //Page not found
                    PageNotFound: '404 - Page Not Found',
                    confused: 'Confused? We are too.',
                    LinkToHomePage1: 'You can go back to the',
                    homepage: 'homepage',
                    LinkToHomePage2: 'to get back on track.',
                    //Discount
                    discountHeader:'RECEIVE AN EXTRA 10% DISCOUNT',
                    discountHeader2: 'Sign up to the newsletter and have all the promos in your inbox the moment they are published.',
                    discountEmail: 'Enter your Email',
                    discountConsent: `I hereby agree to receive commercial information (newsletter) 
                    from Sol Hotel with its registered office in Tajna Góra (01-100) al. Nieznana 5 
                    (hereinafter referred to as the Company) by electronic means to the e-mail address provided 
                    in the form. I understand that I may withdraw my consent at any time and that such withdrawal 
                    shall not affect the lawfulness of processing based on consent before its withdrawal.`,
                    discountSubmit: 'Submit',
                    //LanguageSelector
                    LanguageSelector: 'Choose a language',
                    //RoomDescription
                    roomDescriptionHeader: 'SEE OUR COMFORTABLE ROOM',
                    roomDescriptionText: `The hotel has 85 rooms, including 74 standard rooms, 6 premium rooms and 5 suites. Our rooms are equipped 
                    with large, comfortable beds, which ensure a restful night's sleep. Standard facilities include: telephone 
                    with a free wake-up call on demand, LCD satellite TV, free Wi-Fi and tea and coffee making facilities as well 
                    as free mineral water. Bathrooms are equipped with showers or bathtubs. For extra comfort, each bathroom has 
                    a hairdryer, slippers, and bathrobes. To ensure our guests' best possible rest, all rooms are equipped with 
                    blackout curtains.`,
                    roomDescriptionHeader2: 'Among our rooms you will find: ',
                    roomDescriptionWifi: 'Free room Wi-Fi internet',
                    roomDescriptionRefridgerator: 'Refridgerator',
                    roomDescriptionTelephone: 'Telephone',
                    roomDescriptionWater: 'Free mineral water',
                    roomDescriptionAir: 'Air conditioning',
                    roomDescriptionDesk: 'Desk',
                    roomDescriptionTowels: 'Towels',
                    roomDescriptionHairdryer: 'Hair dryer',
                    roomDescriptionBookFor: 'Book for',
                    roomDescriptionPerNight: '$/night',
                    roomDescriptionSpace: 'Space:',
                    roomDescriptionMaxAmountGuests: 'Max amount of guests:',
                    roomDescriptionBookNow: 'Book Now:',
                    //Login
                    LoginSignIn: 'Sign In',
                    LoginLogin: 'Login',
                    LoginNoAccount: 'You do not have an account?',
                    LoginSignup: 'Sign up',
                    LoginPlaceholderPassword: 'Password',
                    LoginPlaceholderLogin: 'Login',
                    //Register
                    RegisterSignup: 'Sign Up',
                    RegisterJoin: 'Join',
                    RegisterAlreadyAccount: 'Already have an account?',
                    RegisterSignin: 'Sign in',
                    RegisterPlaceholderPassword: 'Password',
                    RegisterPlaceholderName: 'Name',
                    //Toaster
                    ConfirmationToast:'Success! Submission successful',
                    ErrorToast: 'Something went wrong. Try again later',
                    
                
                }
            },
            PL:{
                translation:{
                    about_us_a_brand_leader: 'Lider marki"',
                    about_us_p1: 'Oferując najpotężniejszy portfel w branży, nasze ponad 30 marek i prawie 8 700 obiektów w 139 krajach i terytoriach dają ludziom więcej sposobów na nawiązanie kontaktu, doświadczenie i poszerzenie swojego świata.',
                    about_us_reception: 'Recepcja',
                    about_us_Tel_No: 'Numer telefonu:',
                    about_us_Booking_department: 'Dział rezerwacji',
                    about_us_Core_Values_Heritage: 'Wartości fundamentale i dziedzictwo',
                    about_us_p2: 'Założona przez J. Willarda i Alice Marriott, a kierowana przez rodzinne przywództwo od 1927 roku, ich zasady pozostają osadzone w kulturze firmy i we wszystkim, co robimy dzisiaj.',
                    about_us_Company_Strategy: 'Strategia firmy',
                    about_us_p3: 'Nasza strategia Rozwoju Przyszłości obejmuje priorytety naszej firmy, zakorzenione w naszych wartościach fundamentalnych, i prowadzi nas podczas realizacji obietnicy unikalnej marki gościnności Marriott na całym świecie.',
                    about_us_Diversity_Inclusion: 'Różnorodność i Inkluzywnośc',
                    about_us_p4: 'Różnorodność i inkluzywność są fundamentalne dla naszych wartości podstawowych i strategicznych celów biznesowych. Troska o ludzi i ich dobrostan stanowi nasze najcenniejsze dziedzictwo kulturowe.',
                    about_us_Sustainability_Social_Impact: 'Zrównoważoność i wpływ społeczny',
                    about_us_p5: 'Podążając za naszą platformą zrównoważonego rozwoju i wpływu społecznego, Serve 360: Robienie Dobrego we Wszystkich Kierunkach, Marriott International zobowiązuje się do tworzenia pozytywnego i trwałego wpływu wszędzie tam, gdzie prowadzimy działalność.',
                    //Booking
                    booking_form: 'Zarezerwuj pokój',
                    booking_start_date: 'Wybierz datę rozpoczęcia:',
                    booking_end_date: 'Wybierz datę zakończenia:',
                    booking_room: 'Wybierz pokój:',
                    booking_submit: 'Zarezerwuj',
                    bookingBookings: 'Rezerwacje',
                    bookingStartdate: 'Początek:',
                    bookingEnddate: 'Koniec:',
                    bookingRoom: 'Pokój:',
                    bookingDeletereservation: 'Anuluj Rezerwację',
                    // Contact From
                    ContactUs: 'Napisz do nas',
                    Submit: 'Wyślij',
                    ContactFormPlaceholderName: 'Imię',
                    ContactFormPlaceholderMessage: 'Wiadomość',
                    //Footer
                    Links: 'Linki',
                    MainPage: 'Strona główna',
                    AboutUs: 'O nas',
                    FooterContactUs: 'Skontaktuj się z nami',
                    SocialMedia: 'Media społecznościowe',
                    Contact: 'Kontakt',
                    AllRightsReserved: '2024 Hotel Sol. Wszelkie prawa zastrzeżone.',
                    //Form
                    Login:'Login',
                    Password: 'Hasło',
                    //Header
                    BookNow: 'Rezerwuj teraz',
                    OurRooms: 'Nasze pokoje',
                    HeaderContactUs: 'Napisz do nas',
                    HeaderLogin: 'Zaloguj się',
                    HeaderLogOut: 'Wyloguj się',
                    //Location
                    LocationText:`Budynek, którego architektura nawiązuje do stylu nadmorskiej willi, znajduje się przy głównej drodze komunikacyjnej Trójmiasta, a jednocześnie tuż obok Aquaparku i zaledwie 250 m od piaszczystej plaży. Hotel posiada 50 pokoi. Na jego terenie znajduje się restauracja Aquarella, serwująca kuchnię europejską oraz 3 sale konferencyjne.`,
                    //Page not found
                    PageNotFound: '404 - Strona nie znaleziona',
                    confused: 'Zdezorientowani? My też.',
                    LinkToHomePage1: 'Możesz wrócić do',
                    homepage: 'strony głównej',
                    LinkToHomePage2: 'żeby wrócić na właściwą ścieżkę.',
                    //Discount
                    discountHeader:'OTRZYMAJ DODATKOWĄ ZNIŻKĘ 10%',
                    discountHeader2: 'Zapisz się do newslettera i otrzymuj wszystkie promocje bezpośrednio do swojej skrzynki odbiorczej w momencie ich publikacji.',
                    discountEmail: 'Wpisz swój adres e-mail',
                    discountConsent: `Oświadczam, że zgadzam się na otrzymywanie informacji handlowych (newslettera) od Hotelu Sol 
                    z siedzibą w Tajnej Górze (01-100) al. Nieznana 5 (dalej zwanej Spółką) za pomocą środków elektronicznych 
                    na podany w formularzu adres e-mail. Rozumiem, że mogę w dowolnym momencie wycofać swoją zgodę, a takie wycofanie nie będzie miało wpływu na 
                    zgodność z prawem przetwarzania opartego na zgodzie przed jej wycofaniem.`,
                    discountSubmit: 'Wyślij',
                     //LanguageSelector
                     LanguageSelector: 'Wybierz język',
                     //RoomDescription
                    roomDescriptionHeader: 'ZOBACZ NASZ WYGODNY POKÓJ',
                    roomDescriptionText: `Hotel dysponuje 85 pokojami, w tym 74 pokojami standardowymi, 
                    6 pokojami premium i 5 apartamentami. Nasze pokoje są wyposażone w duże, wygodne łóżka, 
                    które zapewniają spokojny sen. Standardowe udogodnienia obejmują: 
                    telefon z bezpłatnym budzikiem na życzenie, telewizor LCD z satelitarną telewizją, 
                    darmowe Wi-Fi oraz możliwość parzenia herbaty i kawy, a także bezpłatną wodę mineralną. 
                    Łazienki są wyposażone w prysznice lub wanny. Dla dodatkowego komfortu każda łazienka wyposażona 
                    jest w suszarkę do włosów, kapcie i szlafroki. Aby zapewnić naszym gościom najlepszy możliwy odpoczynek, 
                    wszystkie pokoje są wyposażone w zasłony zaciemniające.`,
                    roomDescriptionHeader2: 'Wśród naszych pokoi znajdziesz: ',
                    roomDescriptionWifi: 'Bezpłatny internet Wi-Fi w pokojach',
                    roomDescriptionRefridgerator: 'Lodówka',
                    roomDescriptionTelephone: 'Telefon',
                    roomDescriptionWater: 'Darmowa woda mineralna',
                    roomDescriptionAir: 'Klimatyzacja',
                    roomDescriptionDesk: 'Biurko',
                    roomDescriptionTowels: 'Ręczniki',
                    roomDescriptionHairdryer: 'Suszarka do włosów',
                    roomDescriptionBookFor: 'Rezerwuj za',
                    roomDescriptionPerNight: '$/noc',
                    roomDescriptionSpace: 'Przestrzeń:',
                    roomDescriptionMaxAmountGuests: 'Maksymalna liczba gości:',
                    roomDescriptionBookNow: 'Rezerwuj:',
                    //Login
                    LoginSignIn: 'Zaloguj się',
                    LoginLogin: 'Zaloguj',
                    LoginNoAccount: 'Nie masz konta?',
                    LoginSignup: 'Zarejestruj się',
                    LoginPlaceholderPassword: 'Hasło',
                    LoginPlaceholderLogin: 'Nazwa użytkownika',
                    //Register
                    RegisterSignup: 'Zarejestruj się',
                    RegisterJoin: 'Dołącz',
                    RegisterAlreadyAccount: 'Masz już konto?',
                    RegisterSignin: 'Zaloguj się',
                    RegisterPlaceholderPassword: 'Hasło',
                    RegisterPlaceholderName: 'Nazwa użytkownika',
                     //Toaster
                     ConfirmationToast:' Udało się',
                     ErrorToast: 'Coś poszło ne tak. Spróbuj później',
                     
                }
            }
        }
    }
);
export default i18next