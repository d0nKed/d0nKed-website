export const Schools = [
    {
        name: "Singapore Polytechnic",
        course: "Diploma in AI and Analytics",
        year: "2022 - 2026",
        logo: "/images/sp.png"
    },
    {
        name: "Fuhua Secondary School",
        course: "GCE N-Levels",
        year: "2018 - 2021",
        logo: "/images/fuhua.png"
    },
]

export const ProjectList = [
    {
        projectName: "Predcited stock prices using AI model",
        shortDescription: "Used machine learning models to predict stock prices",
        fullDescription: "For this project, I conducted a comprehensive time series analysis on stock prices for Apple, Amazon, and DBS, focusing on data preprocessing, exploratory data analysis, stationarity testing, and forecasting. I began by cleaning the dataset, converting dates to datetime format, setting the date as the index, and verifying data integrity by checking for missing values. To analyze trends, I visualized stock prices with rolling averages (5-day, 30-day, and 70-day) to smooth fluctuations. Using the Augmented Dickey-Fuller (ADF) test, I identified that the stock prices were non-stationary and applied first-order differencing to achieve stationarity. I further analyzed price volatility by plotting the differenced series. Finally, I implemented ARIMA modeling to forecast stock prices, optimizing parameters through grid search to minimize the root mean squared error (RMSE). This project provided key insights into market trends and predictive modeling, showcasing my ability to work with time series data and statistical forecasting techniques.",
        image: "/images/projects/Stock-price-prediction-8.png",
        link: "/files/Stock-price-prediction.pptx",
        year: "2024",
        tags: [
            "Python",
            "Pandas",
            "Matplotlib",
            "Statsmodels",
            "Scikit-learn"
        ],
        snapshots: [
            "/images/projects/Stock-price-prediction-1.png",
            "/images/projects/Stock-price-prediction-2.png",
            "/images/projects/Stock-price-prediction-3.png",
            "/images/projects/Stock-price-prediction-4.png",
            "/images/projects/Stock-price-prediction-5.png",
            "/images/projects/Stock-price-prediction-6.png",
            "/images/projects/Stock-price-prediction-7.png",
        ]
    },
    {
        projectName: "Analysis of HDB dataset",
        shortDescription: "Analysed HDB dataset to provide data-driven insights",
        fullDescription: "For this project, I conducted an in-depth analysis of HDB resale prices in Singapore, focusing on the impact of proximity to MRT stations on housing values. Using a combination of HDB resale transaction data (1990–2021) and MRT station geospatial data, I performed data wrangling to clean, merge, and geocode the datasets, allowing for precise distance calculations to the nearest MRT station. Through Tableau visualizations, I identified key insights: a higher volume of transactions occurs within 1 km of MRT stations, but surprisingly, resale prices are slightly higher for flats located beyond 2 km, likely due to larger unit sizes or specific demand factors. Additionally, scatter plots and heat maps revealed location-based price disparities, such as the significantly lower resale prices in Lim Chu Kang despite its proximity to an MRT station. Trend analysis using line charts showcased the effects of economic downturns like the Asian Financial Crisis on property prices. This project strengthened my skills in data integration, geospatial analysis, and data visualization with Tableau, providing valuable insights for housing policy recommendations and urban planning strategies.",
        image: "/images/projects/Hdb-resale-price-1.png",
        link: "/files/HBD-resale-prices-analysis.pdf",
        year: "2024",
        tags: [
            "Tableau",
            "Pandas",
            "Python",
            "GIS Mapping",
        ],
        snapshots: [
            "/images/projects/Hdb-resale-price-2.png",
            "/images/projects/Hdb-resale-price-3.png",
            "/images/projects/Hdb-resale-price-4.png",
        ]
    }
]

export const QnA = [
    {
        question: "What are your hobbies? 🍃🎮🏸",
        answer: "Hiking, Gaming, Badminton (Of course, how can we forget coding?)"
    },
    {
        question: "What got you into coding? 🤔",
        answer: "My passion for coding started all the way in year one of PFP in Singapore Polytechnic 🏫 when I signed up for a coding workshop during the holidays to pass the time. I was taught basic Python 🐍 and I was hooked! I was fascinated by the idea of creating programs to solve problems to help the masses."
    },
    { 
        question: "What programming languages do you know? 💻",  
        answer: "Python, JavaScript, HTML/CSS, MySQL. I'm also actively teaching myself new frameworks (e.g. React) to keep myself and my skills relevant and up-to-date! 😁" 
    },
    {
        question: "What's your motto? 📜",
        answer: "My motto is 'If not now, then when?' because it reminds me to take action, embrace opportunities, and live with purpose instead of waiting for the perfect moment. (૭ ｡•̀ ᵕ •́｡ )૭"
    },
    {
        question: "What are your favourite games? 🎮",
        answer: "I'm a huge fan of First Person Shooter games 🎯, especially Valorant! I also enjoy playing Minecraft ⛏️ and Counter Strike 2 🔫!"
    },
    { 
        question: "How did you create this website? 🤔",
        answer: "React ⚛️, Vite ⚡️, Chakra UI 💚, and Framer Motion 🎞️! I also used Vercel to host this website 🌐. All self-taught BTW!"
    },
]