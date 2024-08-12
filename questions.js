let questions = [
    {
        numb: 1,
        question: "Based on your understanding of immigration laws do you believe they should be strengthened or weakened?",
        numanswers: 2,
        options: [
            "Strengthened",
            "Weakened"
        ],
    },
    {
        numb: 2,
        question: "To tackle the Issue of Illegal Immigration, which option do you believe would have the best impact?",
        numanswers: 2,
        realquestion: "real",
        trumpanswer: "Increase the punishment against illegal immigration",
        kennedyanswer: "Reform the current system to manage illegal immigration better",
        options: [
            "Increase the punishment against illegal immigration",
            "Reform the current system to manage illegal immigration better"
        ]
    },
    {
        numb: 3,
        question: "Regarding the enforcement of Immigration laws, which option do you believe would have the best impact?",
        numanswers: 4,
        realquestion: "real",
        harrisanswer: "Increased enforcement with humane considerations",
        steinanswer: "Reduced enforcement with a more lenient and supportive approach",
        westanswer: "Balanced enforcement approach with a focus on social justice",
        oliveranswer: "Balanced enforcement approach with a focus on efficiency",
        options: [
            "Increased enforcement with humane considerations",
            "Reduced enforcement with a more lenient and supportive approach",
            "Balanced enforcement approach with a focus on social justice",
            "Balanced enforcement approach with a focus on efficiency"
        ]
    },
    {
        numb: 4,
        question: "Based on your understanding of the Department of Education, do you believe that curriculum should be under federal, state, or balanced control?",
        numanswers: 3,
        options: [
            "State",
            "Balanced",
            "Federal"
        ],
    },
    {
        numb: 5,
        question: "What would your preferred approach be regarding the Department of Education, considering that you believe that curriculum should be under state control?",
        numanswers: 2,
        realquestion: "real",
        trumpanswer: "Reallocate funding to better support public schools while offering vouchers that allow the option for people to send their kids to private school if they can not afford it",
        oliveranswer: "Reallocate funding with an emphasis on practicality and locally driven solutions for school choices and education policies",
        options: [
            "Reallocate funding to better support public schools while offering vouchers that allow the option for people to send their kids to private school if they can not afford it",
            "Reallocate funding with an emphasis on practicality and locally driven solutions for school choices and education policies"
        ]
    },
    {
        numb: 6,
        question: "What would your preferred approach be regarding the Department of Education, considering that you believe that curriculum should be under balanced control?",
        numanswers: 2,
        realquestion: "real",
        harrisanswer: "Set national education standards, and disperse funding to ensure that the quality of education remains equal across states",
        kennedyanswer: "Target funding to help drive innovation and modernization, while simultaneously improving teacher training and salaries",
        options: [
            "Target funding to help drive innovation and modernization, while simultaneously improving teacher training and salaries",
            "Set national education standards, and disperse funding to ensure that the quality of education remains equal across states"
        ]
    },
    {
        numb: 7,
        question: "What would your preferred approach be regarding the Department of Education, considering that you believe that curriculum should be under federal control?",
        numanswers: 2,
        realquestion: "real",
        steinanswer: "Advocate for a strong role in funding free public education from Pre-K through college, simultaneously increasing federal funding to fund mental health programs in schools",
        westanswer: "Support a strong federal role to promote free public education, with substantial federal investment to help immigrant and underprivileged communities",
        options: [
            "Advocate for a strong role in funding free public education from Pre-K through college, simultaneously increasing federal funding to fund mental health programs in schools",
            "Support a strong federal role to promote free public education, with substantial federal investment to help immigrant and underprivileged communities"
        ]
    },
    {
        numb: 8,
        question: "Based on your understanding of the healthcare system, do you believe the country should move towards universal health care or maintain the current system with improvements?",
        numanswers: 2,
        options: [
            "Support Universal Healthcare",
            "Oppose Universal Healthcare"
        ],
    },
    {
        numb: 9,
        question: "Which option do you believe would have the best impact on improving the healthcare system?",
        numanswers: 2,
        realquestion: "real",
        steinanswer: "Implement a single-payer healthcare system providing free healthcare for all",
        westanswer: "Implement a single-payer healthcare system providing free healthcare for all",
        harrisanswer: "Expand existing public healthcare programs and provide subsidies to ensure universal coverage",
        options: [
            "Implement a single-payer healthcare system providing free healthcare for all",
            "Expand existing public healthcare programs and provide subsidies to ensure universal coverage"
        ]
    },
    {
        numb: 10,
        question: "Regarding healthcare reforms, which option do you believe would have the best impact?",
        numanswers: 2,
        realquestion: "real",
        trumpanswer: "Increase competition and choice within the private healthcare market",
        kennedyanswer: "Implement targeted reforms to reduce costs and improve access while maintaining a private healthcare system",
        oliveranswer: "Implement targeted reforms to reduce costs and improve access while maintaining a private healthcare system",
        options: [
            "Increase competition and choice within the private healthcare market",
            "Implement targeted reforms to reduce costs and improve access while maintaining a private healthcare system"
        ]
    },
    {
        numb: 11,
        question: "Based on your understanding of abortion laws and reproductive rights, do you support or oppose access to abortion?",
        numanswers: 2,
        options: [
            "Support Abortion Laws and Reproductive Rights",
            "Conditionally Opposes Abortion Laws and Reproductive Rights"
        ],
    },
    {
        numb: 12,
        question: "Which option do you feel most aligns with your view on abortion laws and reproductive rights?",
        numanswers: 4,
        realquestion: "real",
        steinanswer: "Universal access to abortion services with no restrictions or regulations",
        westanswer: "Increased access to abortion and reproductive rights, labeling it as a fundamental right",
        harrisanswer: "Increased federal protection and funding of abortion rights, ensuring unrestricted access",
        oliveranswer: "Supports a woman's right to choose, with minimal government interference",
        options: [
            "Universal Access to abortion services with no restrictions or regulations",
            "Increased access to abortion and reproductive rights, labeling it as a fundamental right",
            "Supports a woman's right to choose, with minimal government interference",
            "Increased federal protection and funding of abortion rights, ensuring unrestricted access"
        ]
    },
    {
        numb: 13,
        question: "Which option do you feel most aligns with your view on abortion laws and reproductive rights?",
        numanswers: 2,
        realquestion: "real",
        trumpanswer: "Opposes abortion rights, supporting state-level restrictions, and conditionally allows for cases of rape, incest, and maternal health",
        kennedyanswer: "Supports a woman's right to choose but favors restrictions on late-term abortions",
        options: [
            "Opposes abortion rights, supporting state-level restrictions, and conditionally allows for cases of rape, incest, and maternal health",
            "Supports a woman's right to choose but favors restrictions on late-term abortions"
        ]
    },
    {
        numb: 14,
        question: "Based on your understanding of LGBTQ+ rights do you believe that they should be expanded, rolled back, or remain unchanged?",
        numanswers: 3,
        trumpanswer: "Rolled back",
        kennedyanswer: "Remain unchanged",
        options: [
            "Expanded",
            "Rolled back",
            "Remain unchanged"
        ]
    },
    {
        numb: 15,
        question: "Which option most aligns with your views on how LGBTQ+ rights should be expanded?",
        numanswers: 4,
        realquestion: "real",
        harrisanswer: "LGBTQ+ rights should be expanded and defended, ensuring that sexual orientation and gender identity are protected under federal civil rights laws",
        steinanswer: "LGBTQ+ rights require a massive expansion with comprehensive legal reforms to ensure fairness and equality",
        westanswer: "LGBTQ+ rights require a substantial expansion, however, this must get pushed as part of a broader social justice agenda, aiming to better the lives of all Americans",
        oliveranswer: "Balanced enforcement approach with a focus on efficiency",
        options: [
            "LGBTQ+ rights should be expanded and defended, ensuring that sexual orientation and gender identity are protected under federal civil rights laws",
            "LGBTQ+ rights require a massive expansion with comprehensive legal reforms to ensure fairness and equality",
            "LGBTQ+ rights require a substantial expansion, however, this must get pushed as part of a broader social justice agenda, aiming to better the lives of all Americans",
            "LGBTQ+ rights should be defended and expanded, through the principle that each individual deserves liberty, with little to no government interference in the choices of people"
        ]
    },
    {
        numb: 16,
        question: "Based on your understanding of fossil fuels do you support or oppose the usage currently and in the future?",
        numanswers: 2,
        options: [
            "Support",
            "Oppose"
        ],
    },
    {
        numb: 17,
        question: "Which option most aligns with your view on fossil fuel usage?",
        numanswers: 3,
        realquestion: "real",
        trumpanswer: "Fossil fuel usage should be expanded, with a focus on energy independence through deregulation and domestic production",
        kennedyanswer: "Fossil fuel usage should be deregulated and domestic production increased, however implementing programs that shift towards more eco-friendly forms in the future",
        oliveranswer: "Fossil fuel Usage should be efficiently transitioned over time, with dependence reduced through market-driven solutions",
        options: [
            "Fossil fuel usage should be expanded, with a focus on energy independence through deregulation and domestic production",
            "Fossil fuel usage should be deregulated and domestic production increased, however implementing programs that shift towards more eco-friendly forms in the future",
            "Fossil fuel Usage should be efficiently transitioned over time, with dependence reduced through market-driven solutions"
        ]
    },
    {
        numb: 18,
        question: "Which option most aligns with your view on fossil fuel usage?",
        numanswers: 3,
        realquestion: "real",
        harrisanswer: "Fossil fuel usage should be significantly reduced, with a focus on the transition to renewable energy, aiming for net-zero emissions by 2050",
        steinanswer: "Fossil fuel usage should be immediately halted, with a rapid transition to 100% renewable energy by 2030",
        westanswer: "Fossil fuel usage should be reduced significantly, with a focus on benefiting marginalized communities",
        options: [
            "Fossil fuel usage should be significantly reduced, with a focus on the transition to renewable energy, aiming for net-zero emissions by 2050",
            "Fossil fuel usage should be immediately halted, with a rapid transition to 100% renewable energy by 2030",
            "Fossil fuel usage should be reduced significantly, with a focus on benefiting marginalized communities"
        ]
    },
    {
        numb: 19,
        question: "Based on your understanding of the Israel and Palestine conflict, do you support Israel or Palestine?",
        numanswers: 2,
        options: [
            "Israel",
            "Palestine"
        ],
    },
    {
        numb: 20,
        question: "Based on your support of Israel in the conflict, which option most aligns with your view of how the U.S. should handle the conflict?",
        numanswers: 3,
        realquestion: "real",
        trumpanswer: "Unwavering support of Israel, with a major focus on strengthening Israel's strategic positions, prioritizing military and diplomatic backing of Israel",
        kennedyanswer: "Favoring a balanced approach, supporting Israel while simultaneously recognizing the humanitarian crisis in Gaza",
        harrisanswer: "Strong support of Israel's right to defend itself, advocating for Israel's security, however also advocating for humanitarian aid in Palestine",
        options: [
            "Strong support of Israel's right to defend itself, advocating for Israel's security, however also advocating for humanitarian aid in Palestine",
            "Unwavering support of Israel, with a major focus on strengthening Israel's strategic positions, prioritizing military and diplomatic backing of Israel",
            "Favoring a balanced approach, supporting Israel while simultaneously recognizing the humanitarian crisis in Gaza"
        ]
    },
    {
        numb: 21,
        question: "Based on your support of Palestine in the conflict, which option most aligns with your view of how the U.S. should handle the conflict?",
        numanswers: 3,
        realquestion: "real",
        oliveranswer: "Advocates for a non-interventionist U.S. approach, opposing military aid to both Israel and Palestine, while promoting peaceful negotiations in the region",
        steinanswer: "Advocating for the suspension of U.S. military aid to Israel, promoting a two-state solution focusing on human rights and justice for Palestinians",
        westanswer: "Strong condemning of Israel's actions, viewing them as violations of international law, calling for Israel to end the occupation and conflict",
        options: [
            "Advocating for the suspension of U.S. military aid to Israel, promoting a two-state solution focusing on human rights and justice for Palestinians",
            "Strong condemning of Israel's actions, viewing them as violations of international law, calling for Israel to end the occupation and conflict",
            "Advocates for a non-interventionist U.S. approach, opposing military aid to both Israel and Palestine, while promoting peaceful negotiations in the region"
        ]
    },
    {
        numb: 22,
        question: "Based on your understanding of Inflation and its Impact, which approach do you believe will have the best impact for the country?",
        numanswers: 3,
        options: [
            "Pro-market approach with reduced government intervention",
            "Social and environmental approach",
            "Balanced government-led approach"
        ],
    },
    {
        numb: 23,
        question: "Which pro-market approach do you believe will have the most positive impact in solving the issue?",
        numanswers: 2,
        realquestion: "real",
        trumpanswer: "Major reversing of Biden-era policies, with tax cuts, deregulation, and energy independence as modes for increasing economic growth",
        oliveranswer: "Reduced taxes and regulations combined with free-market solutions to stimulate growth, emphasizing decreased government involvement",
        options: [
            "Major reversing of Biden-era policies, with tax cuts, deregulation, and energy independence as modes for increasing economic growth",
            "Reallocate funding with an emphasis on practicality and locally driven solutions for school choices and education policies"
        ]
    },
    {
        numb: 24,
        question: "Which Government-led approach do you believe will have the most positive impact on solving the issue?",
        numanswers: 2,
        realquestion: "real",
        harrisanswer: "Pushing for government-led interventions by reducing costs in essential sectors while heavily investing in infrastructure to allow for stability",
        kennedyanswer: "Pushing for decreased government spending, while simultaneously limiting the Federal Reserve's influence allowing for cautious spending to avoid excessive debt or continued inflation",
        options: [
            "Pushing for government-led interventions by reducing costs in essential sectors while heavily investing in infrastructure to allow for stability",
            "Pushing for decreased government spending, while simultaneously limiting the Federal Reserve's influence allowing for cautious spending to avoid excessive debt or continued inflation"
        ]
    },
    {
        numb: 25,
        question: "Which Approach do you believe will have the most positive impact in solving the issue, Social or Environmental?",
        numanswers: 2,
        realquestion: "real",
        steinanswer: "Transition to a green economy, implementing price controls and reducing military spending",
        westanswer: "Redistributing the wealth and increasing social spending to protect the working class of people, as they are necessary to counteract the effects of inflation",
        options: [
            "Transition to a green economy, implementing price controls and reducing military spending",
            "Redistributing the wealth and increasing social spending to protect the working class of people, as they are necessary to counteract the effects of inflation"
        ]
    },
    {
        numb: 26,
        question: "Do you support or oppose U.S. involvement in the Ukraine and Russia conflict?",
        numanswers: 2,
        harrisanswer: "Support",
        options: [
            "Support",
            "Oppose"
        ],
    },
    {
        numb: 27,
        question: "Which approach do you feel most aligns with your view on U.S. opposition to the Ukraine and Russia conflict?",
        numanswers: 5,
        realquestion: "real",
        trumpanswer: "Quick resolution prioritizing U.S. involvement and costs",
        kennedyanswer: "Diplomatic resolution that reduced tensions and U.S. involvement over time to avoid further escalation",
        steinanswer: "Opposes U.S. military aid, advocating for gradual de-escalation and diplomacy",
        westanswer: "End U.S. support for Ukraine while advocating for peace",
        oliveranswer: "Opposes U.S. intervention within the conflict, promoting diplomatic efforts between the countries",
        options: [
            "Diplomatic resolution that reduced tensions and U.S. involvement over time to avoid further escalation",
            "Quick resolution prioritizing U.S. involvement and costs",
            "Opposes U.S. military aid, advocating for gradual de-escalation and diplomacy",
            "End U.S. support for Ukraine while advocating for peace",
            "Opposes U.S. intervention within the conflict, promoting diplomatic efforts between the countries"
        ]
    },
    {
        numb: 28,
        question: "Based on your understanding of gun control, do you oppose or support stricter gun control?",
        numanswers: 2,
        options: [
            "Support",
            "Oppose"
        ],
    },
    {
        numb: 29,
        question: "Which approach regarding gun control, best aligns with your views?",
        numanswers: 3,
        realquestion: "real",
        trumpanswer: "Opposition of new gun control measures, rather prioritizing mental health concerns instead",
        kennedyanswer: "Protecting the second amendment rights, however instituting background checks to better ensure safety",
        oliveranswer: "Opposition of gun control regulation, advocating for minimal government intervention",
        options: [
            "Opposition of new gun control measures, rather prioritizing mental health concerns instead",
            "Protecting the second amendment rights, however instituting background checks to better ensure safety",
            "Opposition of gun control regulation, advocating for minimal government intervention"
        ]
    },
    {
        numb: 30,
        question: "Which approach regarding stricter gun control, best aligns with your views?",
        numanswers: 3,
        realquestion: "real",
        harrisanswer: "Stricter gun control through universal background checks and assault weapon bans",
        steinanswer: "Comprehensive gun control reforms including the banning of assault weapons and weapons with high-capacity magazines",
        westanswer: "Comprehensive background checks and firearm restrictions for those with criminal or tainted records",
        options: [
            "Stricter gun control through universal background checks and assault weapon bans",
            "Comprehensive gun control reforms including the banning of assault weapons and weapons with high-capacity magazines",
            "Comprehensive background checks and firearm restrictions for those with criminal or tainted records"
        ]
    },
]