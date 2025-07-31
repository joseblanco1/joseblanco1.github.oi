// Cosmic Blog - JavaScript Functionality

// Language state
let currentLanguage = 'en';

// Translation data
const translations = {
    en: {
        // Navigation
        'Cosmic Blog': 'Cosmic Blog',
        'Home': 'Home',
        'About Us': 'About Us',
        'Your Luck': 'Your Luck',
        'For You': 'For You',
        
        // Home page
        'Our Night': 'Our Night',
        'Explore the infinite universe of thoughts, dreams, and discoveries': 'Explore the infinite universe of thoughts, dreams, and discoveries',
        'Discover More': 'Discover More',
        'Check Your Luck': 'Check Your Luck',
        'Featured Content': 'Featured Content',
        'Discover the latest cosmic insights and personal reflections': 'Discover the latest cosmic insights and personal reflections',
        'Stellar Thoughts': 'Stellar Thoughts',
        'Deep reflections on life, universe, and everything in between. Join me on this cosmic journey of self-discovery.': 'Deep reflections on life, universe, and everything in between. Join me on this cosmic journey of self-discovery.',
        'Read More': 'Read More',
        'Cosmic Fortune': 'Cosmic Fortune',
        'Discover what the stars have in store for you. Explore your cosmic destiny and unlock the mysteries of your future.': 'Discover what the stars have in store for you. Explore your cosmic destiny and unlock the mysteries of your future.',
        'Check Fortune': 'Check Fortune',
        'Personal Space': 'Personal Space',
        'Curated content just for you. Personalized insights, recommendations, and cosmic guidance tailored to your journey.': 'Curated content just for you. Personalized insights, recommendations, and cosmic guidance tailored to your journey.',
        'Explore': 'Explore',
        'A Stolen Radiance': 'A Stolen Radiance',
        'I do not regret stealing the moon\'s glow, for I fell in love with it.': 'I do not regret stealing the moon\'s glow, for I fell in love with it.',
        'The Dialogue of Existence': 'The Dialogue of Existence',
        'The sky spoke to the earth and said: \'It is the light that achieves its splendor, and that sometimes it is the light for many.\'': 'The sky spoke to the earth and said: \'It is the light that achieves its splendor, and that sometimes it is the light for many.\'',
        'The earth exclaimed somewhat annoyed, but its annoyance disappeared when explaining to the sky: \'The sky cannot feel what I feel when its hands touch the landscape, and I feel how its soul thanks me for its landscapes.\'': 'The earth exclaimed somewhat annoyed, but its annoyance disappeared when explaining to the sky: \'The sky cannot feel what I feel when its hands touch the landscape, and I feel how its soul thanks me for its landscapes.\'',
        'A silence between the two arose and out of nowhere a dead voice appeared saying: \'Something beyond, something that has no fixed concept, a labyrinth of situations and emotions; each action reflects that there is always something more, and above all there is no one else who achieves such a feat.\'': 'A silence between the two arose and out of nowhere a dead voice appeared saying: \'Something beyond, something that has no fixed concept, a labyrinth of situations and emotions; each action reflects that there is always something more, and above all there is no one else who achieves such a feat.\'',
        'The sky and the earth trembled upon hearing such words, but what they wondered most was \'Who was it?\' To which the voice, almost disappearing, said: \'I cannot be light, but neither darkness; I cannot be sky, but neither earth. So I am the void, a void that was filled when she appeared, and finally, sky and earth, she is my \'nothing\'. When the sky and earth ask me what I am thinking and I say \'nothing\', they will know that I am thinking of her.\'': 'The sky and the earth trembled upon hearing such words, but what they wondered most was \'Who was it?\' To which the voice, almost disappearing, said: \'I cannot be light, but neither darkness; I cannot be sky, but neither earth. So I am the void, a void that was filled when she appeared, and finally, sky and earth, she is my \'nothing\'. When the sky and earth ask me what I am thinking and I say \'nothing\', they will know that I am thinking of her.\'',
        'Sky and earth fell silent, the void left, the sky changed and the earth turned...': 'Sky and earth fell silent, the void left, the sky changed and the earth turned...', 
        'The Next Phase': 'The Next Phase',
        'A phase ends and another begins, believe it or not, this is the beginning of the race, you don\'t realize the ship has just been built with the goal of making you travel through all the planets.': 'A phase ends and another begins, believe it or not, this is the beginning of the race, you don\'t realize the ship has just been built with the goal of making you travel through all the planets.',
        
        // About page
        'About Our Cosmic Journey': 'About Our Cosmic Journey',
        'Discover the story behind the stars': 'Discover the story behind the stars',
        'Welcome to My Universe': 'It is immense, it will take time.',
        'It is immense, it will take time.': 'It is immense, it will take time.',
        'The Cosmic Explorer': 'That\'s you and that\'s me, I wish you luck explorer, the universe is vast.',
        'That\'s you and that\'s me, I wish you luck explorer, the universe is vast.': 'That\'s you and that\'s me, I wish you luck explorer, the universe is vast.',
        'Our Mission': 'Our Mission',
        'Refresh your world with every experience, bringing flavor, joy, and energy to every corner. My purpose is to create moments that inspire, connect, and awaken positive emotions, transforming the everyday into something extraordinary through authentic products, closeness, and passion for what we do.': 'Refresh your world with every experience, bringing flavor, joy, and energy to every corner. My purpose is to create moments that inspire, connect, and awaken positive emotions, transforming the everyday into something extraordinary through authentic products, closeness, and passion for what we do.',
        'Our Vision': 'Our Vision',
        'To be the number one reason for you, when it comes to refreshing, transforming your mood and bringing freshness, innovation, wanting to be the symbol of joy and connection to your heart and that every encounter leaves a mark on your heart.': 'To be the number one reason for you, when it comes to refreshing, transforming your mood and bringing freshness, innovation, wanting to be the symbol of joy and connection to your heart and that every encounter leaves a mark on your heart.',
        'Our Journey': 'It has just begun...',
        'It has just begun...': 'It has just begun...', 
        '"We are all made of star stuff. We are a way for the cosmos to know itself."': '"We are all made of star stuff. We are a way for the cosmos to know itself."',
        
        // Luck page
        'Your Cosmic Fortune': 'Your Cosmic Fortune',
        'Let the stars guide your destiny': 'Let the stars guide your destiny',
        'In discord, the solution will be in your TWO hands.': 'In discord, the solution will be in your TWO hands.',
        'EIGHT notes may surround you, but only one sings to your tune.': 'EIGHT notes may surround you, but only one sings to your tune.',
        'Sun and earth, earth and sun, both important and unique, ZERO are the people who approach you.': 'Sun and earth, earth and sun, both important and unique, ZERO are the people who approach you.',
        'What is that in the sky? Is it a bird... no, it\'s a red ribbon that joins the action, making it clear that like him, there is no two, only ONE.': 'What is that in the sky? Is it a bird... no, it\'s a red ribbon that joins the action, making it clear that like him, there is no two, only ONE.',
        
        // Zodiac signs
        'Aries': 'Aries',
        'Taurus': 'Taurus',
        'Gemini': 'Gemini',
        'Cancer': 'Cancer',
        'Leo': 'Leo',
        'Virgo': 'Virgo',
        'Libra': 'Libra',
        'Scorpio': 'Scorpio',
        'Sagittarius': 'Sagittarius',
        'Capricorn': 'Capricorn',
        'Aquarius': 'Aquarius',
        'Pisces': 'Pisces',
        
        // For You page
        'Curated For You': 'Curated For You',
        'Your personal cosmic experience': 'Your personal cosmic experience',
        'This page is still under construction, please await future updates.': 'This page is still under construction, please await future updates.',
        'Welcome, Cosmic Traveler': 'Welcome, Cosmic Traveler',
        'Write your content for \'Welcome, Cosmic Traveler\' here.': 'Write your content for \'Welcome, Cosmic Traveler\' here.',
        'Cosmic Reflections': 'Cosmic Reflections',
        'Write your content for \'Cosmic Reflections\' here.': 'Write your content for \'Cosmic Reflections\' here.',
        'Personal Stories': 'Personal Stories',
        'Write your content for \'Personal Stories\' here.': 'Write your content for \'Personal Stories\' here.',
        'Cosmic Insights': 'Cosmic Insights',
        'Write your content for \'Cosmic Insights\' here.': 'Write your content for \'Cosmic Insights\' here.',
        'Guidance & Inspiration': 'Guidance & Inspiration',
        'Write your content for \'Guidance & Inspiration\' here.': 'Write your content for \'Guidance & Inspiration\' here.',
        'Recent Cosmic Thoughts': 'Recent Cosmic Thoughts',
        'The Dance of Galaxies': 'The Dance of Galaxies',
        'Write your content for \'The Dance of Galaxies\' here.': 'Write your content for \'The Dance of Galaxies\' here.',
        'Stardust Memories': 'Stardust Memories',
        'Write your content for \'Stardust Memories\' here.': 'Write your content for \'Stardust Memories\' here.',
        'The Silence Between Stars': 'The Silence Between Stars',
        'Write your content for \'The Silence Between Stars\' here.': 'Write your content for \'The Silence Between Stars\' here.',
        'Stay Connected to the Cosmos': 'Stay Connected to the Cosmos',
        'Write your content for newsletter signup here.': 'Write your content for newsletter signup here.',
        'Subscribe': 'Subscribe',
        'Enter your email': 'Enter your email',
        
        // Tags
        'Philosophy': 'Philosophy',
        'Mindfulness': 'Mindfulness',
        'Wisdom': 'Wisdom',
        'Life': 'Life',
        'Growth': 'Growth',
        'Connection': 'Connection',
        'Science': 'Science',
        'Discovery': 'Discovery',
        'Wonder': 'Wonder',
        'Motivation': 'Motivation',
        'Guidance': 'Guidance',
        'Hope': 'Hope',
        
        // Dates
        '3 days ago': '3 days ago',
        '1 week ago': '1 week ago',
        '2 weeks ago': '2 weeks ago',
        
        // Footer
        '© 2024 Cosmic Blog. All rights reserved.': '© 2024 Cosmic Blog. All rights reserved.'
    },
    ru: {
        // Navigation
        'Cosmic Blog': 'Космический Блог',
        'Home': 'Главная',
        'About Us': 'О нас',
        'Your Luck': 'Ваша Удача',
        'For You': 'Для Вас',
        
        // Home page
        'Our Night': 'Наша Ночь',
        'Explore the infinite universe of thoughts, dreams, and discoveries': 'Исследуйте бесконечную вселенную мыслей, мечтаний и открытий',
        'Discover More': 'Узнать больше',
        'Check Your Luck': 'Проверить удачу',
        'Featured Content': 'Рекомендуемый контент',
        'Discover the latest cosmic insights and personal reflections': 'Откройте для себя последние космические идеи и личные размышления',
        'Stellar Thoughts': 'Звездные мысли',
        'Deep reflections on life, universe, and everything in between. Join me on this cosmic journey of self-discovery.': 'Глубокие размышления о жизни, вселенной и всем, что между ними. Присоединяйтесь ко мне в этом космическом путешествии самопознания.',
        'Read More': 'Читать далее',
        'Cosmic Fortune': 'Космическая удача',
        'Discover what the stars have in store for you. Explore your cosmic destiny and unlock the mysteries of your future.': 'Узнайте, что звезды приготовили для вас. Исследуйте свою космическую судьбу и раскройте тайны своего будущего.',
        'Check Fortune': 'Проверить удачу',
        'Personal Space': 'Личное пространство',
        'Curated content just for you. Personalized insights, recommendations, and cosmic guidance tailored to your journey.': 'Контент, созданный специально для вас. Персонализированные идеи, рекомендации и космическое руководство, адаптированное к вашему путешествию.',
        'Explore': 'Исследовать',
        'A Stolen Radiance': 'Украденное сияние',
        'I do not regret stealing the moon\'s glow, for I fell in love with it.': 'Я не жалею, что украл сияние луны, ибо я влюбился в него.',
        'The Dialogue of Existence': 'Диалог существования',
        'The sky spoke to the earth and said: \'It is the light that achieves its splendor, and that sometimes it is the light for many.\'': 'Небо говорило с землей и сказало: \'Это свет, который достигает своего великолепия, и который иногда является светом для многих.\'',
        'The earth exclaimed somewhat annoyed, but its annoyance disappeared when explaining to the sky: \'The sky cannot feel what I feel when its hands touch the landscape, and I feel how its soul thanks me for its landscapes.\'': 'Земля воскликнула несколько раздраженно, но ее раздражение исчезло, когда она объяснила небу: \'Небо не может чувствовать то, что чувствую я, когда его руки касаются пейзажа, и я чувствую, как его душа благодарит меня за его пейзажи.\'',
        'A silence between the two arose and out of nowhere a dead voice appeared saying: \'Something beyond, something that has no fixed concept, a labyrinth of situations and emotions; each action reflects that there is always something more, and above all there is no one else who achieves such a feat.\'': 'Между ними возникла тишина, и из ниоткуда появился мертвый голос, говорящий: \'Что-то за пределами, что-то, что не имеет фиксированного понятия, лабиринт ситуаций и эмоций; каждое действие отражает, что всегда есть что-то большее, и прежде всего нет никого другого, кто достиг бы такого подвига.\'',
        'The sky and the earth trembled upon hearing such words, but what they wondered most was \'Who was it?\' To which the voice, almost disappearing, said: \'I cannot be light, but neither darkness; I cannot be sky, but neither earth. So I am the void, a void that was filled when she appeared, and finally, sky and earth, she is my \'nothing\'. When the sky and earth ask me what I am thinking and I say \'nothing\', they will know that I am thinking of her.\'': 'Небо и земля задрожали, услышав такие слова, но больше всего они задавались вопросом: \'Кто это был?\' На что голос, почти исчезая, сказал: \'Я не могу быть светом, но и не тьмой; я не могу быть небом, но и не землей. Так что я — пустота, пустота, которая заполнилась, когда она появилась, и, наконец, небо и земля, она — мое \'ничто\'. Когда небо и земля спросят меня, о чем я думаю, и я скажу \'ничто\', они будут знать, что я думаю о ней.\'',
        'Sky and earth fell silent, the void left, the sky changed and the earth turned...': 'Небо и земля замолчали, пустота ушла, небо изменилось, и земля повернулась...', 
        'The Next Phase': 'Следующая фаза',
        'A phase ends and another begins, believe it or not, this is the beginning of the race, you don\'t realize the ship has just been built with the goal of making you travel through all the planets.': 'Одна фаза заканчивается, и начинается другая, верите или нет, это начало гонки, вы не понимаете, что корабль только что был построен с целью заставить вас путешествовать по всем планетам.',
        
        // About page
        'About Our Cosmic Journey': 'О нашем космическом путешествии',
        'Discover the story behind the stars': 'Откройте историю за звездами',
        'Welcome to My Universe': 'Это огромно, это займет время.',
        'It is immense, it will take time.': 'Это огромно, это займет время.',
        'The Cosmic Explorer': 'Это ты и это я, желаю тебе удачи, исследователь, вселенная очень обширна.',
        'That\'s you and that\'s me, I wish you luck explorer, the universe is vast.': 'Это ты и это я, желаю тебе удачи, исследователь, вселенная очень обширна.',
        'Our Mission': 'Наша миссия',
        'Refresh your world with every experience, bringing flavor, joy, and energy to every corner. My purpose is to create moments that inspire, connect, and awaken positive emotions, transforming the everyday into something extraordinary through authentic products, closeness, and passion for what we do.': 'Освежить ваш мир каждым опытом, принося вкус, радость и энергию в каждый уголок. Моя цель — создавать моменты, которые вдохновляют, объединяют и пробуждают позитивные эмоции, превращая повседневность в нечто необыкновенное с помощью подлинных продуктов, близости и страсти к тому, что мы делаем.',
        'Our Vision': 'Наше видение',
        'To be the number one reason for you, when it comes to refreshing, transforming your mood and bringing freshness, innovation, wanting to be the symbol of joy and connection to your heart and that every encounter leaves a mark on your heart.': 'Быть причиной номер один для вас, когда речь идет об освежении, преобразовании вашего настроения и привнесении свежести, инноваций, желая быть символом радости и связи с вашим сердцем, и чтобы каждая встреча оставляла след в вашем сердце.',
        'Our Journey': 'Это только началось...',
        'It has just begun...': 'Это только началось...', 
        '"We are all made of star stuff. We are a way for the cosmos to know itself."': '"Мы все сделаны из звездной пыли. Мы — способ для космоса познать себя."',

        // Luck page
        'Your Cosmic Fortune': 'Ваша Космическая Удача',
        'Let the stars guide your destiny': 'Пусть звезды направляют вашу судьбу',
        'In discord, the solution will be in your TWO hands.': 'В раздоре решение будет в ваших ДВУХ руках.',
        'EIGHT notes may surround you, but only one sings to your tune.': 'ВОСЕМЬ нот могут окружать вас, но только одна поет в вашу мелодию.',
        'Sun and earth, earth and sun, both important and unique, ZERO are the people who approach you.': 'Солнце и земля, земля и солнце, оба важны и уникальны, НОЛЬ людей приближаются к вам.',
        'What is that in the sky? Is it a bird... no, it\'s a red ribbon that joins the action, making it clear that like him, there is no two, only ONE.': 'Что это там в небе? Это птица... нет, это красная лента, которая присоединяется к действию, давая понять, что такого, как он, нет двух, только ОДИН.',
        
        // Zodiac signs
        'Aries': 'Овен',
        'Taurus': 'Телец',
        'Gemini': 'Близнецы',
        'Cancer': 'Рак',
        'Leo': 'Лев',
        'Virgo': 'Дева',
        'Libra': 'Весы',
        'Scorpio': 'Скорпион',
        'Sagittarius': 'Стрелец',
        'Capricorn': 'Козерог',
        'Aquarius': 'Водолей',
        'Pisces': 'Рыбы',
        
        // For You page
        'Curated For You': 'Подобрано для вас',
        'Your personal cosmic experience': 'Ваш личный космический опыт',
        'This page is still under construction, please await future updates.': 'Эта страница еще находится в разработке, пожалуйста, ожидайте будущих обновлений.',
        'Welcome, Cosmic Traveler': 'Добро пожаловать, космический путешественник
        'It is immense, it will take time.': 'Это огромно, это займет время.',енник\' здесь.',
        'Cosmic Reflections': 'Космические размышления',
        'Write your content for \'Cosmic Reflections\' here.': 'Напишите свой контент для \'Космические размышления\' здесь.',
        'Personal Stories': 'Личные истории',
        'Write your content for \'Personal Stories\' here.': 'Напишите свой контент для \'Личные истории\' здесь.',
        'Cosmic Insights': 'Космические озарения',
        'Write your content for \'Cosmic Insights\' here.': 'Напишите свой контент для \'Космические озарения\' здесь.',
        'Guidance & Inspiration': 'Руководство и вдохновение',
        'Write your content for \'Guidance & Inspiration\' here.': 'Напишите свой контент для \'Руководство и вдохновение\' здесь.',
        'Recent Cosmic Thoughts': 'Недавние космические мысли',
        'The Dance of Galaxies': 'Танец галактик',
        'Write your content for \'The Dance of Galaxies\' here.': 'Напишите свой контент для \'Танец галактик\' здесь.',
        'Stardust Memories': 'Воспоминания звездной пыли',
        'Write your content for \'Stardust Memories\' here.': 'Напишите свой контент для \'Воспоминания звездной пыли\' здесь.',
        'The Silence Between Stars': 'Тишина между звездами',
        'Write your content for \'The Silence Between Stars\' here.': 'Напишите свой контент для \'Тишина между звездами\' здесь.',
        'Stay Connected to the Cosmos': 'Оставайтесь на связи с космосом',
        'Write your content for newsletter signup here.': 'Напишите свой контент для подписки на рассылку здесь.',
        'Subscribe': 'Подписаться',
        'Enter your email': 'Введите ваш email',
        
        // Tags
        'Philosophy': 'Философия',
        'Mindfulness': 'Осознанность',
        'Wisdom': 'Мудрость',
        'Life': 'Жизнь',
        'Growth': 'Рост',
        'Connection': 'Связь',
        'Science': 'Наука',
        'Discovery': 'Открытие',
        'Wonder': 'Чудо',
        'Motivation': 'Мотивация',
        'Guidance': 'Руководство',
        'Hope': 'Надежда',
        
        // Dates
        '3 days ago': '3 дня назад',
        '1 week ago': '1 неделю назад',
        '2 weeks ago': '2 недели назад',
        
        // Footer
        '© 2024 Cosmic Blog. All rights reserved.': '© 2024 Космический Блог. Все права защищены.'
    }
}; 

// Function to toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    localStorage.setItem('cosmicBlogLanguage', currentLanguage);
    applyTranslations();
}

// Function to apply translations
function applyTranslations() {
    document.querySelectorAll('[data-en]').forEach(element => {
        const key = element.getAttribute('data-en');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    document.querySelectorAll('[data-en-placeholder]').forEach(element => {
        const key = element.getAttribute('data-en-placeholder');
        if (translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });

    document.getElementById('lang-indicator').textContent = currentLanguage.toUpperCase();
}

// Apply translations on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('cosmicBlogLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    applyTranslations();

    // Fortune Generator (for luck.html)
    const fortuneButton = document.getElementById('fortune-button');
    const fortuneDisplay = document.getElementById('fortune-display');
    const fortunes = [
        "A distant star sends you its light today. Someone from your past may reach out with good news.",
        "The cosmos aligns to bring you unexpected joy. Embrace the new opportunities that arise.",
        "A quiet moment under the stars will reveal a hidden truth. Listen to your inner voice.",
        "Your path is illuminated by a celestial body. Trust your journey, even if the destination is unclear.",
        "A meteor shower of blessings is headed your way. Be open to receiving abundance.",
        "The universe whispers secrets to those who listen. Pay attention to subtle signs.",
        "Your cosmic energy is strong today. Use it to manifest your deepest desires.",
        "A new constellation of possibilities is forming for you. Step out of your comfort zone."
    ];

    if (fortuneButton && fortuneDisplay) {
        fortuneButton.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * fortunes.length);
            fortuneDisplay.textContent = fortunes[randomIndex];
            fortuneDisplay.classList.remove('d-none'); // Make sure it's visible
        });
    }
});

