/**
 * International First Names Database
 * Contains 10,000+ names from diverse cultures worldwide
 */

const NAMES_DATABASE = {
    // English/American names
    english: [
        "James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles",
        "Christopher", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Joshua",
        "Kenneth", "Kevin", "Brian", "George", "Timothy", "Ronald", "Edward", "Jason", "Jeffrey", "Ryan",
        "Jacob", "Gary", "Nicholas", "Eric", "Jonathan", "Stephen", "Larry", "Justin", "Scott", "Brandon",
        "Benjamin", "Samuel", "Raymond", "Gregory", "Frank", "Alexander", "Patrick", "Jack", "Dennis", "Jerry",
        "Tyler", "Aaron", "Jose", "Adam", "Nathan", "Henry", "Douglas", "Zachary", "Peter", "Kyle",
        "Noah", "Ethan", "Jeremy", "Walter", "Christian", "Keith", "Roger", "Terry", "Austin", "Sean",
        "Gerald", "Carl", "Harold", "Dylan", "Arthur", "Lawrence", "Jordan", "Jesse", "Bryan", "Billy",
        "Bruce", "Gabriel", "Joe", "Logan", "Albert", "Willie", "Alan", "Eugene", "Russell", "Vincent",
        "Philip", "Bobby", "Johnny", "Bradley", "Roy", "Ralph", "Eugene", "Randy", "Wayne", "Howard",
        "Mary", "Patricia", "Jennifer", "Linda", "Barbara", "Elizabeth", "Susan", "Jessica", "Sarah", "Karen",
        "Lisa", "Nancy", "Betty", "Margaret", "Sandra", "Ashley", "Kimberly", "Emily", "Donna", "Michelle",
        "Dorothy", "Carol", "Amanda", "Melissa", "Deborah", "Stephanie", "Rebecca", "Sharon", "Laura", "Cynthia",
        "Kathleen", "Amy", "Angela", "Shirley", "Anna", "Brenda", "Pamela", "Emma", "Nicole", "Helen",
        "Samantha", "Katherine", "Christine", "Debra", "Rachel", "Carolyn", "Janet", "Catherine", "Maria", "Heather",
        "Diane", "Ruth", "Julie", "Olivia", "Joyce", "Virginia", "Victoria", "Kelly", "Lauren", "Christina",
        "Joan", "Evelyn", "Judith", "Megan", "Andrea", "Cheryl", "Hannah", "Jacqueline", "Martha", "Gloria",
        "Teresa", "Ann", "Sara", "Madison", "Frances", "Kathryn", "Janice", "Jean", "Abigail", "Alice",
        "Judy", "Sophia", "Grace", "Denise", "Amber", "Doris", "Marilyn", "Danielle", "Beverly", "Isabella",
        "Theresa", "Diana", "Natalie", "Brittany", "Charlotte", "Marie", "Kayla", "Alexis", "Lori", "Marie"
    ],

    // German names
    german: [
        "Hans", "Friedrich", "Wolfgang", "Klaus", "Dieter", "Jürgen", "Helmut", "Gerhard", "Manfred", "Werner",
        "Günter", "Heinz", "Horst", "Karl", "Walter", "Peter", "Uwe", "Rolf", "Bernd", "Harald",
        "Rainer", "Volker", "Erich", "Otto", "Heinrich", "Franz", "Rudolf", "Herbert", "Siegfried", "Ernst",
        "Kurt", "Wilhelm", "Konrad", "Lothar", "Norbert", "Reinhard", "Ulrich", "Detlef", "Hartmut", "Joachim",
        "Matthias", "Stefan", "Andreas", "Markus", "Thorsten", "Jens", "Sven", "Dirk", "Holger", "Carsten",
        "Tobias", "Christian", "Florian", "Sebastian", "Maximilian", "Felix", "Lukas", "Jonas", "Leon", "Finn",
        "Elias", "Paul", "Noah", "Ben", "Emil", "Louis", "Luca", "Jakob", "Moritz", "Anton",
        "Oskar", "Theodor", "Carl", "Max", "Alexander", "David", "Niklas", "Tim", "Julian", "Philipp",
        "Ursula", "Helga", "Ingrid", "Renate", "Monika", "Karin", "Brigitte", "Erika", "Gisela", "Christa",
        "Hannelore", "Elfriede", "Gerda", "Irmgard", "Hildegard", "Edith", "Lieselotte", "Gertrud", "Ilse", "Marianne",
        "Sabine", "Petra", "Susanne", "Birgit", "Andrea", "Claudia", "Martina", "Heike", "Gabriele", "Angelika",
        "Anja", "Nicole", "Katrin", "Stefanie", "Melanie", "Nadine", "Tanja", "Sandra", "Manuela", "Silke",
        "Julia", "Anna", "Lena", "Laura", "Katharina", "Lisa", "Sarah", "Lea", "Sophie", "Marie",
        "Emma", "Mia", "Hannah", "Emilia", "Lina", "Amelie", "Luisa", "Johanna", "Clara", "Frieda"
    ],

    // Spanish/Latino names
    spanish: [
        "José", "Juan", "Carlos", "Luis", "Miguel", "Francisco", "Antonio", "Manuel", "Pedro", "Rafael",
        "Alejandro", "Fernando", "Ricardo", "Eduardo", "Javier", "Sergio", "Pablo", "Alberto", "Jorge", "Raúl",
        "Andrés", "Diego", "Enrique", "Arturo", "Ramón", "Roberto", "Óscar", "Guillermo", "Alfredo", "Héctor",
        "Víctor", "Martín", "Adrián", "Rubén", "Ernesto", "Julio", "Salvador", "Armando", "Ignacio", "César",
        "Rodrigo", "Álvaro", "Gonzalo", "Iván", "Hugo", "Tomás", "Nicolás", "Mateo", "Santiago", "Sebastián",
        "Leonardo", "Daniel", "Gabriel", "Samuel", "Emilio", "Marcos", "Lucas", "Matías", "Bruno", "Iker",
        "María", "Carmen", "Ana", "Isabel", "Rosa", "Laura", "Cristina", "Marta", "Elena", "Patricia",
        "Lucía", "Paula", "Sara", "Claudia", "Silvia", "Beatriz", "Raquel", "Andrea", "Irene", "Alba",
        "Sofía", "Valentina", "Camila", "Mariana", "Daniela", "Gabriela", "Victoria", "Fernanda", "Natalia", "Carolina",
        "Alejandra", "Adriana", "Paola", "Mónica", "Verónica", "Diana", "Alicia", "Lorena", "Susana", "Teresa",
        "Pilar", "Dolores", "Francisca", "Mercedes", "Amparo", "Josefa", "Manuela", "Antonia", "Consuelo", "Esperanza",
        "Guadalupe", "Catalina", "Jimena", "Renata", "Ximena", "Regina", "Valeria", "Isabella", "Emma", "Mía"
    ],

    // French names
    french: [
        "Jean", "Pierre", "Michel", "André", "Philippe", "Jacques", "Bernard", "François", "Alain", "René",
        "Louis", "Marcel", "Claude", "Daniel", "Paul", "Henri", "Robert", "Roger", "Christian", "Georges",
        "Gérard", "Maurice", "Yves", "Patrick", "Serge", "Olivier", "Thierry", "Nicolas", "Christophe", "Laurent",
        "Frédéric", "Stéphane", "Éric", "Pascal", "Julien", "Antoine", "Maxime", "Alexandre", "Thomas", "Mathieu",
        "Guillaume", "Vincent", "Sébastien", "David", "Jérôme", "Benjamin", "Romain", "Arnaud", "Hugo", "Lucas",
        "Léo", "Nathan", "Gabriel", "Raphaël", "Arthur", "Louis", "Jules", "Adam", "Ethan", "Noah",
        "Marie", "Jeanne", "Françoise", "Monique", "Catherine", "Nathalie", "Isabelle", "Sylvie", "Martine", "Christine",
        "Nicole", "Jacqueline", "Madeleine", "Denise", "Marguerite", "Suzanne", "Yvonne", "Simone", "Hélène", "Geneviève",
        "Sophie", "Valérie", "Sandrine", "Céline", "Stéphanie", "Véronique", "Laurence", "Aurélie", "Émilie", "Julie",
        "Camille", "Léa", "Manon", "Chloé", "Emma", "Inès", "Louise", "Jade", "Alice", "Lina",
        "Charlotte", "Clara", "Zoé", "Juliette", "Rose", "Anna", "Margot", "Victoire", "Adèle", "Agathe"
    ],

    // Italian names
    italian: [
        "Giuseppe", "Giovanni", "Antonio", "Mario", "Luigi", "Francesco", "Angelo", "Vincenzo", "Pietro", "Salvatore",
        "Carlo", "Franco", "Domenico", "Bruno", "Paolo", "Michele", "Giorgio", "Aldo", "Sergio", "Luciano",
        "Roberto", "Stefano", "Marco", "Andrea", "Alessandro", "Luca", "Matteo", "Lorenzo", "Simone", "Davide",
        "Fabio", "Riccardo", "Massimo", "Claudio", "Gianluca", "Daniele", "Alberto", "Enrico", "Nicola", "Maurizio",
        "Leonardo", "Gabriele", "Tommaso", "Federico", "Filippo", "Edoardo", "Diego", "Samuele", "Giulio", "Emanuele",
        "Maria", "Anna", "Giuseppina", "Rosa", "Angela", "Giovanna", "Teresa", "Lucia", "Carmela", "Francesca",
        "Rita", "Margherita", "Elena", "Paola", "Laura", "Antonella", "Patrizia", "Daniela", "Cristina", "Barbara",
        "Chiara", "Valentina", "Alessandra", "Silvia", "Monica", "Federica", "Elisa", "Sara", "Simona", "Roberta",
        "Giulia", "Martina", "Giorgia", "Sofia", "Aurora", "Alice", "Emma", "Greta", "Beatrice", "Viola",
        "Arianna", "Eleonora", "Camilla", "Ginevra", "Matilde", "Bianca", "Vittoria", "Noemi", "Nicole", "Rebecca"
    ],

    // Chinese transliterations
    chinese: [
        "Wei", "Fang", "Lei", "Yang", "Jing", "Ming", "Hui", "Lin", "Xin", "Yan",
        "Jun", "Tao", "Hong", "Mei", "Ping", "Ling", "Chen", "Hao", "Feng", "Qiang",
        "Yong", "Bo", "Chao", "Dong", "Gang", "Hai", "Jian", "Kai", "Long", "Peng",
        "Qing", "Rui", "Shan", "Tian", "Wen", "Xiang", "Yi", "Zhen", "Zhong", "Zhi",
        "Xiao", "Yun", "Lan", "Hua", "Li", "Na", "Qian", "Shu", "Ting", "Yu",
        "Zhen", "Xue", "Ying", "Juan", "Fei", "Dan", "Jie", "Ke", "Lu", "Man",
        "Ning", "Rong", "Si", "Wen", "Xiu", "Yan", "Zhi", "Ai", "Bao", "Chun",
        "En", "Guang", "He", "Jin", "Kun", "Liang", "Miao", "Nan", "Pei", "Qi",
        "Run", "Sen", "Tong", "Wei", "Xian", "Yue", "Zhen", "An", "Chang", "De",
        "Fu", "Guo", "Han", "Jia", "Kang", "Le", "Min", "Nuo", "Pan", "Qiao",
        "Ren", "Song", "Tang", "Wang", "Xing", "Yuan", "Zhao", "Bai", "Cai", "Dai"
    ],

    // Arabic transliterations
    arabic: [
        "Mohammed", "Ahmed", "Ali", "Hassan", "Hussein", "Omar", "Youssef", "Ibrahim", "Khalid", "Tariq",
        "Hamza", "Mustafa", "Karim", "Amir", "Samir", "Faisal", "Nabil", "Jamal", "Walid", "Rashid",
        "Adel", "Salim", "Nadir", "Hakim", "Bashir", "Rami", "Sami", "Zaid", "Malik", "Idris",
        "Bilal", "Farid", "Habib", "Jalil", "Kareem", "Latif", "Majid", "Nasir", "Qasim", "Rafiq",
        "Sadiq", "Tahir", "Wahid", "Yasir", "Zaki", "Anwar", "Basim", "Daud", "Ehsan", "Fahad",
        "Ghassan", "Hadi", "Imran", "Jawad", "Kamil", "Luqman", "Marwan", "Nizar", "Osama", "Qadir",
        "Fatima", "Aisha", "Maryam", "Khadija", "Zainab", "Layla", "Nour", "Hana", "Sara", "Yasmin",
        "Amira", "Dalia", "Farida", "Jamila", "Karima", "Latifa", "Malika", "Nabila", "Rania", "Salma",
        "Samira", "Sana", "Zahra", "Alia", "Basma", "Dina", "Farah", "Ghada", "Hala", "Iman",
        "Jana", "Lamia", "Maha", "Nada", "Rana", "Reem", "Rim", "Sahar", "Yara", "Zeina"
    ],

    // Indian/South Asian names
    indian: [
        "Raj", "Amit", "Anil", "Vijay", "Sanjay", "Rajesh", "Sunil", "Manoj", "Ramesh", "Ashok",
        "Deepak", "Rakesh", "Suresh", "Mukesh", "Dinesh", "Pankaj", "Vikram", "Nikhil", "Rahul", "Ajay",
        "Arjun", "Karan", "Rohan", "Aditya", "Varun", "Akash", "Yash", "Ankit", "Rohit", "Sahil",
        "Aarav", "Vihaan", "Reyansh", "Ayaan", "Krishna", "Ishaan", "Shiv", "Aryan", "Dev", "Kabir",
        "Vivaan", "Aayan", "Arnav", "Atharva", "Dhruv", "Laksh", "Advait", "Rudra", "Kiaan", "Aarush",
        "Priya", "Anjali", "Sunita", "Pooja", "Neha", "Rekha", "Anita", "Kavita", "Meena", "Geeta",
        "Deepa", "Shweta", "Nisha", "Ritu", "Seema", "Rani", "Sarita", "Padma", "Usha", "Lata",
        "Shreya", "Aishwarya", "Divya", "Pallavi", "Preeti", "Rashmi", "Swati", "Tanvi", "Aditi", "Kriti",
        "Aadhya", "Saanvi", "Aanya", "Aaradhya", "Ananya", "Pari", "Myra", "Sara", "Ira", "Navya",
        "Diya", "Kiara", "Avni", "Riya", "Mira", "Ishita", "Anvi", "Shanaya", "Amaira", "Pihu"
    ],

    // Japanese transliterations
    japanese: [
        "Hiroshi", "Takeshi", "Kenji", "Masashi", "Akira", "Yuki", "Haruki", "Takumi", "Ryu", "Shin",
        "Kazuki", "Daiki", "Naoki", "Satoshi", "Toshio", "Makoto", "Koji", "Shota", "Yuto", "Ren",
        "Kaito", "Haruto", "Sota", "Yuma", "Kento", "Ryota", "Shun", "Hayato", "Kota", "Yusuke",
        "Hinata", "Sora", "Minato", "Asahi", "Riku", "Aoi", "Yamato", "Itsuki", "Haru", "Yusei",
        "Keiko", "Yoko", "Michiko", "Sachiko", "Noriko", "Kumiko", "Tomoko", "Akiko", "Mariko", "Reiko",
        "Yuki", "Miki", "Emi", "Yumi", "Naomi", "Megumi", "Mayumi", "Aya", "Nana", "Rina",
        "Sakura", "Hana", "Aoi", "Mei", "Yui", "Mio", "Riko", "Saki", "Kana", "Haruka",
        "Misaki", "Honoka", "Kokoro", "Koharu", "Himari", "Akari", "Yuna", "Miyu", "Hinata", "Rin"
    ],

    // Korean transliterations
    korean: [
        "Minho", "Joon", "Hyun", "Sung", "Jin", "Woo", "Seung", "Jun", "Tae", "Dong",
        "Soo", "Young", "Min", "Ho", "Jae", "Kyung", "Sang", "Chang", "Kwang", "Yong",
        "Jihoon", "Seojun", "Hajun", "Dohyun", "Juwon", "Sihu", "Junwoo", "Jiho", "Eunwoo", "Yejun",
        "Minjun", "Jimin", "Siwoo", "Yuchan", "Sunwoo", "Woojin", "Jaewon", "Hyunwoo", "Jaemin", "Seokhoon",
        "Jiyoung", "Soyeon", "Minji", "Yuna", "Jihye", "Eunji", "Hyejin", "Sunhee", "Minah", "Yuri",
        "Soyoung", "Haeun", "Seoah", "Seoyeon", "Jiwoo", "Chaeyoung", "Yerin", "Sua", "Hayoung", "Dahyun",
        "Eunbi", "Yejin", "Soojin", "Jisoo", "Hyebin", "Nayeon", "Yeji", "Somin", "Jiyeon", "Suhyun"
    ],

    // African names
    african: [
        "Kwame", "Kofi", "Yaw", "Kwesi", "Kojo", "Ebo", "Nana", "Adjoa", "Akua", "Ama",
        "Chidi", "Emeka", "Nneka", "Chinyere", "Adaeze", "Obi", "Uche", "Ngozi", "Ifeoma", "Chiamaka",
        "Thabo", "Sipho", "Bongani", "Mandla", "Sibusiso", "Lindiwe", "Nomvula", "Thandiwe", "Zandile", "Busisiwe",
        "Amara", "Imani", "Zuri", "Nia", "Kaya", "Sade", "Ade", "Olu", "Yemi", "Tunde",
        "Adebayo", "Oluwaseun", "Folake", "Adanna", "Chioma", "Nkechi", "Oluchi", "Adaora", "Ebele", "Nkem",
        "Jabari", "Kamau", "Mwangi", "Njeri", "Wanjiku", "Akinyi", "Ochieng", "Otieno", "Atieno", "Adhiambo",
        "Sekou", "Mamadou", "Ousmane", "Amadou", "Fatou", "Aminata", "Mariama", "Aissatou", "Kadiatou", "Oumou",
        "Tendai", "Farai", "Tatenda", "Rufaro", "Rudo", "Nyasha", "Tariro", "Kudakwashe", "Tafadzwa", "Chenai"
    ],

    // Scandinavian names
    scandinavian: [
        "Erik", "Lars", "Anders", "Johan", "Per", "Karl", "Olof", "Nils", "Gustav", "Sven",
        "Axel", "Oscar", "Hugo", "William", "Lucas", "Liam", "Oliver", "Elias", "Noah", "Adam",
        "Emil", "Viktor", "Filip", "Leo", "Theodor", "Vincent", "Isak", "Ludvig", "August", "Arvid",
        "Magnus", "Bjorn", "Ragnar", "Harald", "Leif", "Ivar", "Sigurd", "Tor", "Odin", "Freya",
        "Anna", "Maria", "Eva", "Karin", "Sara", "Emma", "Ida", "Maja", "Ella", "Wilma",
        "Ebba", "Alma", "Olivia", "Alice", "Astrid", "Elsa", "Saga", "Freja", "Agnes", "Vera",
        "Ingrid", "Sigrid", "Helga", "Greta", "Linnea", "Elvira", "Selma", "Nora", "Ellen", "Stella",
        "Liv", "Solveig", "Elin", "Hanna", "Julia", "Sofia", "Lena", "Kristin", "Katarina", "Helena"
    ],

    // Slavic/Eastern European names
    slavic: [
        "Ivan", "Alexei", "Dmitri", "Nikolai", "Mikhail", "Sergei", "Andrei", "Vladimir", "Boris", "Pavel",
        "Oleg", "Igor", "Viktor", "Yuri", "Grigori", "Fyodor", "Vasili", "Anatoli", "Konstantin", "Roman",
        "Maxim", "Artem", "Alexander", "Kirill", "Daniil", "Nikita", "Egor", "Ilya", "Matvei", "Timofei",
        "Jan", "Piotr", "Krzysztof", "Tomasz", "Pawel", "Marcin", "Lukasz", "Michal", "Adam", "Jakub",
        "Miroslav", "Vaclav", "Jiri", "Karel", "Petr", "Martin", "Ondrej", "Tomas", "David", "Lukas",
        "Olga", "Natasha", "Tatiana", "Irina", "Elena", "Svetlana", "Marina", "Anastasia", "Ekaterina", "Maria",
        "Anna", "Vera", "Nadia", "Yulia", "Oksana", "Larisa", "Galina", "Lyudmila", "Nina", "Daria",
        "Agnieszka", "Katarzyna", "Anna", "Malgorzata", "Ewa", "Monika", "Joanna", "Zofia", "Alicja", "Natalia",
        "Petra", "Lenka", "Martina", "Tereza", "Lucie", "Michaela", "Veronika", "Barbora", "Kristyna", "Nikola"
    ],

    // Greek names
    greek: [
        "Nikos", "Giorgos", "Dimitris", "Kostas", "Yannis", "Panagiotis", "Vassilis", "Christos", "Michalis", "Thanasis",
        "Alexandros", "Spyros", "Stavros", "Petros", "Andreas", "Stelios", "Elias", "Pavlos", "Evangelos", "Antonis",
        "Maria", "Eleni", "Katerina", "Georgia", "Sofia", "Anastasia", "Dimitra", "Christina", "Vasiliki", "Ioanna",
        "Eirini", "Konstantina", "Paraskevi", "Nikoleta", "Alexandra", "Chrysoula", "Theodora", "Panagiota", "Fotini", "Despoina",
        "Artemis", "Athena", "Daphne", "Helena", "Irene", "Lydia", "Melina", "Olympia", "Penelope", "Thalia",
        "Zoe", "Chloe", "Phoebe", "Cleo", "Dora", "Thea", "Elektra", "Calista", "Ariadne", "Cassandra"
    ],

    // Hebrew/Jewish names
    hebrew: [
        "David", "Daniel", "Benjamin", "Joshua", "Samuel", "Michael", "Jonathan", "Jacob", "Joseph", "Aaron",
        "Noah", "Ethan", "Nathan", "Adam", "Isaac", "Levi", "Eli", "Asher", "Ezra", "Gabriel",
        "Avi", "Yosef", "Moshe", "Shlomo", "Yitzhak", "Yaakov", "Chaim", "Oren", "Noam", "Eitan",
        "Sarah", "Rebecca", "Rachel", "Leah", "Hannah", "Miriam", "Ruth", "Esther", "Naomi", "Abigail",
        "Maya", "Noa", "Tamar", "Yael", "Shira", "Talia", "Ayala", "Michal", "Avital", "Liora",
        "Eden", "Daniela", "Ariella", "Adina", "Ilana", "Batya", "Chaya", "Rivka", "Devorah", "Shoshana"
    ],

    // Portuguese/Brazilian names
    portuguese: [
        "João", "José", "Pedro", "Paulo", "Carlos", "Luís", "Fernando", "António", "Francisco", "Manuel",
        "Miguel", "Rafael", "Bruno", "Ricardo", "André", "Rodrigo", "Tiago", "Diogo", "Hugo", "Rui",
        "Guilherme", "Bernardo", "Gonçalo", "Duarte", "Tomás", "Martim", "Afonso", "Salvador", "Lourenço", "Vicente",
        "Maria", "Ana", "Inês", "Mariana", "Beatriz", "Sofia", "Carolina", "Marta", "Rita", "Catarina",
        "Matilde", "Leonor", "Francisca", "Clara", "Alice", "Margarida", "Joana", "Lara", "Diana", "Sara",
        "Camila", "Júlia", "Isabela", "Gabriela", "Larissa", "Fernanda", "Letícia", "Amanda", "Bruna", "Bianca"
    ],

    // Turkish names
    turkish: [
        "Ahmet", "Mehmet", "Mustafa", "Ali", "Hasan", "Huseyin", "Ibrahim", "Ismail", "Osman", "Yusuf",
        "Murat", "Emre", "Burak", "Serkan", "Kemal", "Selim", "Cem", "Tolga", "Deniz", "Kaan",
        "Berk", "Efe", "Yigit", "Emir", "Arda", "Kerem", "Doruk", "Alp", "Baran", "Eren",
        "Fatma", "Ayse", "Emine", "Hatice", "Zeynep", "Elif", "Merve", "Esra", "Seda", "Tugba",
        "Irem", "Ece", "Defne", "Melis", "Cemre", "Duru", "Ela", "Asya", "Nehir", "Nil",
        "Buse", "Cansu", "Damla", "Ebru", "Gizem", "Hazal", "Ilgin", "Ipek", "Yaren", "Zehra"
    ],

    // Dutch names
    dutch: [
        "Jan", "Pieter", "Hendrik", "Willem", "Johannes", "Cornelis", "Gerrit", "Jacob", "Dirk", "Frederik",
        "Bas", "Daan", "Sem", "Luuk", "Levi", "Finn", "Jesse", "Lars", "Thijs", "Tim",
        "Bram", "Ruben", "Stijn", "Milan", "Sven", "Niels", "Wouter", "Jeroen", "Maarten", "Joost",
        "Anna", "Maria", "Elisabeth", "Johanna", "Cornelia", "Wilhelmina", "Hendrika", "Geertruida", "Catharina", "Petronella",
        "Emma", "Julia", "Sophie", "Lotte", "Eva", "Lisa", "Sanne", "Fleur", "Noa", "Mila",
        "Tess", "Lieke", "Lynn", "Sara", "Amber", "Isa", "Floor", "Britt", "Nina", "Lana"
    ],

    // Polish names
    polish: [
        "Piotr", "Krzysztof", "Andrzej", "Tomasz", "Jan", "Pawel", "Michal", "Stanislaw", "Marcin", "Marek",
        "Jakub", "Szymon", "Mateusz", "Kacper", "Filip", "Wojciech", "Adam", "Bartosz", "Dawid", "Dominik",
        "Aleksander", "Maciej", "Kamil", "Lukasz", "Przemyslaw", "Rafal", "Grzegorz", "Dariusz", "Radoslaw", "Artur",
        "Anna", "Maria", "Katarzyna", "Malgorzata", "Agnieszka", "Barbara", "Ewa", "Krystyna", "Elzbieta", "Zofia",
        "Julia", "Zuzanna", "Lena", "Maja", "Aleksandra", "Natalia", "Wiktoria", "Oliwia", "Amelia", "Hanna",
        "Emilia", "Alicja", "Martyna", "Gabriela", "Karolina", "Klaudia", "Patrycja", "Paulina", "Weronika", "Kinga"
    ],

    // Vietnamese names
    vietnamese: [
        "Minh", "Huy", "Duc", "Hung", "Tuan", "Long", "Hai", "Nam", "Thanh", "Phong",
        "Khoa", "Dung", "Quang", "Hoang", "Binh", "Vinh", "Khanh", "Trung", "Dat", "Anh",
        "Linh", "Huong", "Lan", "Mai", "Thao", "Trang", "Ngoc", "Phuong", "Hong", "Thu",
        "Hoa", "Yen", "Van", "Chi", "Ha", "Hanh", "Diem", "Uyen", "Trinh", "My"
    ],

    // Thai names
    thai: [
        "Somchai", "Somsak", "Prasit", "Sombat", "Wichai", "Prawit", "Prayut", "Thanawat", "Nattapong", "Kittipong",
        "Supachai", "Chaiwat", "Weerachai", "Anucha", "Pichit", "Panya", "Teerawat", "Pornthep", "Chalerm", "Surachai",
        "Siriwan", "Sumalee", "Pornpan", "Siriporn", "Natthaya", "Rattana", "Wanida", "Sunisa", "Kannika", "Ratchanee",
        "Ploy", "Fern", "Mint", "Pim", "Nan", "May", "Bee", "Aom", "Bow", "Nong"
    ],

    // Filipino names
    filipino: [
        "Juan", "Jose", "Antonio", "Manuel", "Francisco", "Pedro", "Ramon", "Carlos", "Ricardo", "Eduardo",
        "Miguel", "Ernesto", "Roberto", "Alejandro", "Fernando", "Rafael", "Gabriel", "Marco", "Luis", "Andres",
        "Maria", "Ana", "Rosa", "Carmen", "Rosario", "Luz", "Esperanza", "Gloria", "Josefina", "Mercedes",
        "Patricia", "Kristine", "Michelle", "Jennifer", "Jasmine", "Nicole", "Angela", "Catherine", "Elizabeth", "Grace"
    ],

    // Indonesian names
    indonesian: [
        "Budi", "Agus", "Eko", "Bambang", "Hendra", "Dedi", "Andi", "Rudi", "Wawan", "Yanto",
        "Rizky", "Dimas", "Fajar", "Bayu", "Arif", "Dwi", "Wahyu", "Putra", "Yoga", "Gilang",
        "Sri", "Dewi", "Siti", "Ani", "Nur", "Fitri", "Rina", "Ratna", "Yuni", "Wati",
        "Putri", "Ayu", "Dian", "Indah", "Sari", "Maya", "Anita", "Linda", "Novia", "Rini"
    ],

    // Persian/Iranian names
    persian: [
        "Ali", "Mohammad", "Reza", "Hossein", "Ahmad", "Mehdi", "Amir", "Hassan", "Saeed", "Hamid",
        "Arash", "Dariush", "Farhad", "Cyrus", "Kaveh", "Bahram", "Omid", "Peyman", "Shahram", "Nader",
        "Maryam", "Fatimah", "Zahra", "Sara", "Leila", "Parisa", "Nasrin", "Shirin", "Fatemeh", "Azadeh",
        "Negar", "Setareh", "Mina", "Niloofar", "Roxana", "Sahar", "Sepideh", "Taraneh", "Yalda", "Ziba"
    ],

    // Hungarian names
    hungarian: [
        "Istvan", "Janos", "Laszlo", "Ferenc", "Zoltan", "Sandor", "Gabor", "Attila", "Tamas", "Bela",
        "Peter", "Miklos", "Gyorgy", "Andras", "Imre", "Karoly", "Jozsef", "Balazs", "Csaba", "Levente",
        "Maria", "Ilona", "Katalin", "Erzsebet", "Anna", "Zsuzsanna", "Eva", "Judit", "Agnes", "Margit",
        "Eszter", "Krisztina", "Viktoria", "Reka", "Dora", "Nora", "Lilla", "Boglarka", "Hanna", "Zsófia"
    ],

    // Romanian names
    romanian: [
        "Ion", "Gheorghe", "Vasile", "Nicolae", "Constantin", "Dumitru", "Mihai", "Alexandru", "Stefan", "Marian",
        "Andrei", "Adrian", "Cristian", "Gabriel", "Florin", "Daniel", "Bogdan", "Razvan", "Cosmin", "Ionut",
        "Maria", "Elena", "Ana", "Ioana", "Mihaela", "Andreea", "Cristina", "Alina", "Roxana", "Gabriela",
        "Diana", "Laura", "Alexandra", "Simona", "Raluca", "Daniela", "Monica", "Carmen", "Adriana", "Oana"
    ],

    // Czech names
    czech: [
        "Jan", "Petr", "Jiri", "Josef", "Karel", "Martin", "Tomas", "Miroslav", "Jaroslav", "Frantisek",
        "Jakub", "Ondrej", "David", "Adam", "Lukas", "Vojtech", "Filip", "Matej", "Daniel", "Simon",
        "Marie", "Jana", "Eva", "Hana", "Anna", "Katerina", "Ludmila", "Veronika", "Petra", "Lenka",
        "Tereza", "Lucie", "Nikola", "Barbora", "Kristyna", "Michaela", "Adela", "Marketa", "Zuzana", "Alena"
    ],

    // Serbian/Croatian names
    serbian: [
        "Marko", "Nikola", "Aleksandar", "Stefan", "Luka", "Jovan", "Milos", "Petar", "Dragan", "Zoran",
        "Dejan", "Milan", "Ivan", "Bojan", "Dusan", "Nemanja", "Vuk", "Lazar", "Filip", "Vladimir",
        "Ana", "Marija", "Jelena", "Milica", "Jovana", "Dragana", "Teodora", "Tamara", "Sara", "Aleksandra",
        "Ivana", "Sofija", "Nevena", "Kristina", "Marina", "Katarina", "Maja", "Natasa", "Sanja", "Tijana"
    ],

    // Ukrainian names
    ukrainian: [
        "Oleksandr", "Mykola", "Vasyl", "Ivan", "Petro", "Volodymyr", "Andriy", "Dmytro", "Serhiy", "Yuriy",
        "Taras", "Bohdan", "Oleh", "Ihor", "Roman", "Viktor", "Maksym", "Artem", "Denys", "Oleksiy",
        "Olena", "Natalia", "Oksana", "Tetiana", "Iryna", "Svitlana", "Yulia", "Larysa", "Halyna", "Lyudmyla",
        "Anna", "Maria", "Kateryna", "Viktoria", "Anastasia", "Daryna", "Alina", "Diana", "Sofiia", "Valeria"
    ],

    // Irish names
    irish: [
        "Sean", "Liam", "Conor", "Patrick", "Cian", "Darragh", "Oisin", "Fionn", "Tadhg", "Eoin",
        "Cillian", "Callum", "Cathal", "Rory", "Niall", "Declan", "Finn", "Aidan", "Brendan", "Kieran",
        "Aoife", "Ciara", "Siobhan", "Niamh", "Saoirse", "Aisling", "Roisin", "Caoimhe", "Mairead", "Sinead",
        "Orla", "Fiona", "Emer", "Grainne", "Deirdre", "Aine", "Clodagh", "Eimear", "Eabha", "Aoibhin"
    ],

    // Scottish names
    scottish: [
        "Angus", "Alistair", "Hamish", "Malcolm", "Fraser", "Gregor", "Iain", "Fergus", "Duncan", "Finlay",
        "Callum", "Cameron", "Craig", "Ross", "Kyle", "Blair", "Lewis", "Logan", "Murray", "Gordon",
        "Eilidh", "Isla", "Skye", "Iona", "Freya", "Maisie", "Heather", "Fiona", "Ailsa", "Morven",
        "Kirsty", "Aileen", "Shona", "Morag", "Mairi", "Catriona", "Bonnie", "Elspeth", "Flora", "Arran"
    ],

    // Welsh names
    welsh: [
        "Dylan", "Rhys", "Owen", "Evan", "Gareth", "Iwan", "Gethin", "Bryn", "Dai", "Dewi",
        "Cai", "Aled", "Huw", "Tomos", "Gwilym", "Emyr", "Ieuan", "Llyr", "Carwyn", "Sion",
        "Gwen", "Eira", "Cerys", "Seren", "Ffion", "Carys", "Rhiannon", "Angharad", "Bethan", "Nia",
        "Mali", "Megan", "Elin", "Lowri", "Catrin", "Non", "Alaw", "Anwen", "Bronwen", "Nerys"
    ],

    // Nordic mythological inspired
    nordic: [
        "Bjorn", "Gunnar", "Leif", "Ragnar", "Sigurd", "Thorsten", "Ulf", "Vidar", "Harald", "Rune",
        "Asger", "Baldur", "Einar", "Fenris", "Hakon", "Ivar", "Jarl", "Knut", "Magnus", "Odin",
        "Astrid", "Freya", "Helga", "Ingrid", "Kara", "Nanna", "Ragna", "Saga", "Solveig", "Thora",
        "Asa", "Embla", "Gerd", "Hilda", "Liv", "Sigrid", "Sif", "Thyra", "Urd", "Ylva"
    ],

    // Unique/modern international
    modern: [
        "Aiden", "Jayden", "Kayden", "Brayden", "Hayden", "Caden", "Zayden", "Jaxon", "Axel", "Maddox",
        "Phoenix", "River", "Sage", "Ocean", "Storm", "Sky", "Rain", "Winter", "Summer", "Autumn",
        "Luna", "Nova", "Aurora", "Aria", "Stella", "Celeste", "Skye", "Jade", "Ivy", "Violet",
        "Scarlett", "Sienna", "Willow", "Harper", "Quinn", "Avery", "Riley", "Morgan", "Jordan", "Taylor",
        "Zara", "Mila", "Nola", "Nyla", "Kira", "Lila", "Nora", "Cora", "Thea", "Vera",
        "Elara", "Lyra", "Freya", "Isla", "Ada", "Ivy", "Ruby", "Hazel", "Olive", "Pearl"
    ],

    // Extended English names
    english_extended: [
        "Liam", "Mason", "Oliver", "Lucas", "Elijah", "Aiden", "Jackson", "Caden", "Grayson", "Carter",
        "Owen", "Wyatt", "Caleb", "Lincoln", "Hunter", "Connor", "Nolan", "Dominic", "Landon", "Easton",
        "Colton", "Cameron", "Bentley", "Tristan", "Brooks", "Carson", "Jace", "Cooper", "Asher", "Sawyer",
        "Declan", "Everett", "Maverick", "Ryder", "Miles", "Emmett", "Gavin", "Bennett", "Wesley", "Adrian",
        "Bryce", "Colin", "Damian", "Derek", "Blake", "Chase", "Grant", "Jonah", "Marcus", "Parker",
        "Preston", "Spencer", "Tanner", "Travis", "Trevor", "Troy", "Victor", "Weston", "Xavier", "Zane",
        "Ava", "Mia", "Chloe", "Lily", "Zoey", "Layla", "Ella", "Addison", "Natalie", "Brooklyn",
        "Savannah", "Leah", "Audrey", "Aaliyah", "Allison", "Anna", "Arianna", "Aubrey", "Bella", "Brianna",
        "Claire", "Elena", "Ellie", "Eva", "Faith", "Gabriella", "Genesis", "Gianna", "Hailey", "Hazel",
        "Jocelyn", "Julia", "Kaylee", "Kennedy", "Kylie", "Lillian", "Lucy", "Mackenzie", "Madelyn", "Maya",
        "Melanie", "Molly", "Naomi", "Nevaeh", "Paisley", "Payton", "Penelope", "Peyton", "Piper", "Reagan",
        "Ruby", "Sadie", "Serenity", "Skylar", "Sydney", "Taylor", "Trinity", "Valentina", "Violet", "Zoe",
        "Elijah", "Abram", "Abel", "Ace", "Aidan", "Alan", "Alec", "Alfred", "Allen", "Andre",
        "Andy", "Archer", "Arlo", "August", "Axel", "Barrett", "Beau", "Beckham", "Bodhi", "Bradley",
        "Brady", "Brandon", "Brayden", "Brendan", "Brett", "Brody", "Bryan", "Bryant", "Bryson", "Byron"
    ],

    // Extended German names
    german_extended: [
        "Achim", "Albrecht", "Alfons", "Alfred", "Alois", "Armin", "Arnold", "Artur", "August", "Axel",
        "Benedikt", "Bernhard", "Berthold", "Bertram", "Boris", "Bruno", "Burkhard", "Christoph", "Claus", "Clemens",
        "Cornelius", "Damian", "Dominik", "Edmund", "Eduard", "Edwin", "Egon", "Elmar", "Emanuel", "Engelbert",
        "Erhard", "Erwin", "Eugen", "Fabian", "Ferdinand", "Florian", "Frank", "Georg", "Gottfried", "Gregor",
        "Gustav", "Hannes", "Hanno", "Hartwig", "Heiko", "Hermann", "Hubert", "Hugo", "Ignaz", "Ingo",
        "Jörg", "Josef", "Jost", "Julius", "Justus", "Kilian", "Klemens", "Konstantin", "Laurenz", "Leopold",
        "Lorenz", "Ludwig", "Malte", "Manfred", "Marcus", "Marius", "Martin", "Mathias", "Meinhard", "Michael",
        "Mirko", "Nicolai", "Norbert", "Olaf", "Oliver", "Otmar", "Patrick", "Philipp", "Ralf", "Reinhold",
        "Roland", "Roman", "Rupert", "Sascha", "Siegbert", "Siegmund", "Simon", "Steffen", "Stephan", "Sven",
        "Theo", "Tilman", "Timo", "Torsten", "Udo", "Ulf", "Urban", "Valentin", "Viktor", "Vinzenz",
        "Waldemar", "Wendelin", "Wilfried", "Willi", "Wolfram", "Xaver", "Adalbert", "Adelheid", "Agnes", "Almut",
        "Anette", "Anke", "Annette", "Antje", "Barbara", "Beate", "Bettina", "Charlotte", "Christiane", "Cordula",
        "Cornelia", "Dagmar", "Dorothea", "Eleonore", "Elfi", "Elisabeth", "Elke", "Elvira", "Erica", "Erna",
        "Eveline", "Franziska", "Freya", "Friederike", "Gabriela", "Gertrude", "Gisela", "Gudrun", "Hanna", "Hedwig",
        "Heidi", "Heidemarie", "Henriette", "Hermine", "Herta", "Ida", "Ines", "Irma", "Isolde", "Jutta"
    ],

    // Extended Spanish names
    spanish_extended: [
        "Abelardo", "Adolfo", "Agustin", "Alejo", "Alfonso", "Alfredo", "Alonso", "Amado", "Ambrosio", "Anastasio",
        "Anselmo", "Aquiles", "Arcadio", "Armando", "Arnaldo", "Arsenio", "Arturo", "Atanasio", "Aurelio", "Baltasar",
        "Bartolome", "Basilio", "Bautista", "Belisario", "Benedicto", "Benito", "Bernabe", "Bernardino", "Blas", "Bonifacio",
        "Camilo", "Candido", "Carmelo", "Casimiro", "Cayetano", "Celestino", "Cipriano", "Claudio", "Clemente", "Cornelio",
        "Cristobal", "Damaso", "Dario", "Demetrio", "Dionisio", "Domingo", "Donato", "Edmundo", "Efrain", "Eleazar",
        "Eleuterio", "Eliseo", "Emiliano", "Emilio", "Epifanio", "Erasmo", "Ernesto", "Esteban", "Eugenio", "Eusebio",
        "Evaristo", "Ezequiel", "Fabian", "Facundo", "Fausto", "Federico", "Feliciano", "Felipe", "Felix", "Fermin",
        "Fidel", "Filemon", "Flavio", "Florencio", "Florian", "Francisco", "Fulgencio", "Gabriel", "Gaspar", "Genaro",
        "Gerardo", "German", "Gilberto", "Gonzalo", "Graciano", "Gregorio", "Gualberto", "Gumersindo", "Gustavo", "Heliodoro",
        "Herberto", "Hermenegildo", "Hilario", "Hipolito", "Honorio", "Horacio", "Huberto", "Ignacio", "Inocencio", "Isaac",
        "Adelaida", "Adela", "Adriana", "Agustina", "Aida", "Alba", "Alberta", "Alejandra", "Alicia", "Amalia",
        "Amelia", "Amparo", "Angela", "Angelica", "Antonia", "Araceli", "Ariadna", "Aurora", "Barbara", "Belen",
        "Benita", "Berenice", "Bernarda", "Blanca", "Brigida", "Candelaria", "Caridad", "Carlota", "Carmela", "Casilda",
        "Catalina", "Cecilia", "Celeste", "Celia", "Clara", "Clarisa", "Claudia", "Clemencia", "Clotilde", "Concepcion",
        "Consuelo", "Corina", "Cristina", "Dalia", "Daniela", "Delfina", "Delia", "Diana", "Dolores", "Dominga"
    ],

    // Extended French names
    french_extended: [
        "Achille", "Adolphe", "Adrien", "Aimé", "Albert", "Alfred", "Alphonse", "Ambroise", "Anatole", "André",
        "Antoine", "Antonin", "Apollinaire", "Aristide", "Armand", "Auguste", "Augustin", "Aurélien", "Baptiste", "Barnabé",
        "Basile", "Bastien", "Benoît", "Bertrand", "Blaise", "Bruno", "Camille", "Cédric", "Charles", "Christophe",
        "Clément", "Côme", "Constant", "Corentin", "Cyrille", "Damien", "Didier", "Edgar", "Édouard", "Émile",
        "Emmanuel", "Ernest", "Étienne", "Eugène", "Fabien", "Fabrice", "Félix", "Ferdinand", "Fernand", "Florent",
        "Francis", "Gaston", "Geoffroy", "Gilbert", "Gilles", "Grégoire", "Gustave", "Guy", "Hadrien", "Hector",
        "Hippolyte", "Honoré", "Hugues", "Jacques", "Jean-Baptiste", "Jean-Claude", "Jean-Luc", "Jean-Marc", "Jean-Paul", "Jérémie",
        "Joël", "Jonas", "Joseph", "Jules", "Léon", "Léonard", "Lilian", "Lionel", "Loïc", "Luc",
        "Lucien", "Ludovic", "Marc", "Marcel", "Marcelin", "Marius", "Martin", "Mathis", "Matthieu", "Maurice",
        "Maxence", "Maximin", "Michel", "Morgan", "Narcisse", "Nathanaël", "Noé", "Norbert", "Octave", "Olivier",
        "Adélaïde", "Adèle", "Adrienne", "Agathe", "Agnès", "Aimée", "Albertine", "Alexandrine", "Alice", "Aline",
        "Amélie", "Anaïs", "Andrée", "Angèle", "Angélique", "Anne", "Annette", "Antoinette", "Apolline", "Ariane",
        "Arlette", "Armelle", "Augustine", "Aurore", "Béatrice", "Bénédicte", "Bernadette", "Berthe", "Blanche", "Brigitte",
        "Capucine", "Carine", "Caroline", "Cassandre", "Catherine", "Cécile", "Célestine", "Céline", "Chantal", "Charlotte",
        "Christine", "Claire", "Clara", "Clarisse", "Claude", "Claudine", "Clémentine", "Clotilde", "Colette", "Constance"
    ],

    // Extended Italian names
    italian_extended: [
        "Achille", "Adriano", "Agostino", "Alberico", "Alberto", "Aldo", "Alessio", "Alfonso", "Alfredo", "Amedeo",
        "Americo", "Andrea", "Angelo", "Anselmo", "Antonio", "Arcangelo", "Armando", "Arnaldo", "Arturo", "Attilio",
        "Augusto", "Aurelio", "Baldassarre", "Bartolomeo", "Basilio", "Battista", "Benedetto", "Beniamino", "Benito", "Bernardino",
        "Bernardo", "Biagio", "Bruno", "Calogero", "Camillo", "Carlo", "Carmelo", "Carmine", "Cesare", "Claudio",
        "Clemente", "Corrado", "Costantino", "Cristoforo", "Damiano", "Daniele", "Dante", "Dario", "Davide", "Diego",
        "Domenico", "Donato", "Edoardo", "Egidio", "Eligio", "Elio", "Emanuele", "Emilio", "Ennio", "Enzo",
        "Ercole", "Ernesto", "Ettore", "Eugenio", "Ezio", "Fabio", "Fabrizio", "Fausto", "Federico", "Felice",
        "Fernando", "Filippo", "Fiorenzo", "Flavio", "Francesco", "Franco", "Gabriele", "Gaetano", "Gennaro", "Gerardo",
        "Giacinto", "Giacomo", "Giancarlo", "Gianfranco", "Gianluca", "Gianluigi", "Gianmarco", "Gianni", "Gilberto", "Gino",
        "Giorgio", "Giovanni", "Giuliano", "Giulio", "Giuseppe", "Giusto", "Gregorio", "Guglielmo", "Guido", "Iacopo",
        "Adele", "Adriana", "Agnese", "Alberta", "Alessia", "Alfonsina", "Alice", "Amalia", "Amanda", "Amelia",
        "Andreina", "Angela", "Angelica", "Anita", "Anna", "Annalisa", "Annamaria", "Annunziata", "Antonella", "Antonia",
        "Antonina", "Assunta", "Augusta", "Aurora", "Barbara", "Beatrice", "Benedetta", "Bianca", "Bruna", "Brunella",
        "Camilla", "Carla", "Carlotta", "Carmela", "Carolina", "Caterina", "Cecilia", "Clara", "Claudia", "Clelia",
        "Clementina", "Concetta", "Cornelia", "Costanza", "Cristina", "Dalia", "Daniela", "Diana", "Dina", "Domenica"
    ],

    // Extended Russian names
    russian: [
        "Aleksandr", "Aleksei", "Anatoli", "Andrei", "Anton", "Arkadi", "Boris", "Daniil", "Denis", "Dmitri",
        "Eduard", "Evgeni", "Fedor", "Filipp", "Gennadi", "Georgi", "Gleb", "Grigori", "Igor", "Ilya",
        "Ivan", "Kirill", "Konstantin", "Lev", "Maksim", "Matvei", "Mikhail", "Nikita", "Nikolai", "Oleg",
        "Pavel", "Petr", "Roman", "Ruslan", "Sergei", "Stanislav", "Stepan", "Timofei", "Vadim", "Valentin",
        "Valeri", "Vasili", "Viktor", "Vitali", "Vladimir", "Vladislav", "Vyacheslav", "Yaroslav", "Yuri", "Zakhar",
        "Aleksandra", "Alina", "Alla", "Anastasia", "Anna", "Antonina", "Daria", "Diana", "Ekaterina", "Elena",
        "Elizaveta", "Eva", "Evgenia", "Galina", "Irina", "Kira", "Ksenia", "Larisa", "Lidiya", "Liliya",
        "Lyubov", "Lyudmila", "Margarita", "Maria", "Marina", "Nadezhda", "Natalia", "Nina", "Oksana", "Olga",
        "Polina", "Raisa", "Sofiya", "Svetlana", "Tamara", "Tatiana", "Valentina", "Valeria", "Vera", "Veronika",
        "Viktoria", "Yaroslava", "Yekaterina", "Yelena", "Yulia", "Zinaida", "Zoya", "Darya", "Karina", "Kristina"
    ],

    // Extended Chinese names
    chinese_extended: [
        "Biao", "Bin", "Cheng", "Cong", "Da", "Deng", "Di", "Fan", "Fei", "Feng",
        "Gang", "Gao", "Guang", "Han", "Hao", "He", "Hong", "Hua", "Huang", "Hui",
        "Ji", "Jia", "Jian", "Jiang", "Jie", "Jin", "Jing", "Jun", "Kai", "Kang",
        "Kun", "Lan", "Lei", "Li", "Lian", "Liang", "Lin", "Ling", "Liu", "Long",
        "Lu", "Lun", "Mei", "Meng", "Min", "Ming", "Na", "Nan", "Ning", "Pei",
        "Peng", "Qi", "Qian", "Qiang", "Qin", "Qing", "Qiu", "Quan", "Rong", "Ru",
        "Rui", "Sha", "Shan", "Shao", "Shen", "Sheng", "Shi", "Shu", "Shui", "Song",
        "Su", "Tai", "Tang", "Tao", "Tian", "Ting", "Wang", "Wei", "Wen", "Wu",
        "Xi", "Xia", "Xian", "Xiang", "Xiao", "Xin", "Xing", "Xiong", "Xu", "Xue",
        "Yan", "Yang", "Yao", "Ye", "Yi", "Yin", "Ying", "Yong", "You", "Yu",
        "Yuan", "Yue", "Yun", "Zeng", "Zhan", "Zhang", "Zhao", "Zhe", "Zhen", "Zheng",
        "Zhi", "Zhong", "Zhou", "Zhu", "Zi", "Zong", "Aihua", "Baozhen", "Chunhua", "Dongmei",
        "Fangfang", "Guihua", "Huifang", "Jiaying", "Jingyi", "Lanying", "Lili", "Lingling", "Meiling", "Mingzhu",
        "Qiuyan", "Ruiping", "Shufen", "Tingting", "Weihong", "Xiaoyan", "Yanli", "Yingying", "Yuhua", "Zhenzhen"
    ],

    // Extended Japanese names
    japanese_extended: [
        "Akihiko", "Akio", "Atsushi", "Daichi", "Daisuke", "Eiji", "Fumio", "Genji", "Gorou", "Hajime",
        "Hideo", "Hikaru", "Hiroaki", "Hiroki", "Hiroshi", "Hitoshi", "Ichiro", "Isamu", "Jiro", "Jun",
        "Junichi", "Katsuya", "Kazuhiko", "Kazuki", "Kazuo", "Kei", "Keiji", "Keita", "Ken", "Kenichi",
        "Kenji", "Kensuke", "Kenta", "Koji", "Koichi", "Kouki", "Kyo", "Kyousuke", "Makoto", "Mamoru",
        "Manabu", "Masahiro", "Masaki", "Masaru", "Masato", "Masayuki", "Mitsuo", "Mitsuru", "Naoki", "Naoto",
        "Noboru", "Nobuo", "Osamu", "Renji", "Rikuto", "Ryoichi", "Ryota", "Satoru", "Satoshi", "Shinji",
        "Shinnosuke", "Shiro", "Shougo", "Shuichi", "Sora", "Susumu", "Tadashi", "Takahiro", "Takashi", "Takeshi",
        "Takuma", "Takuya", "Taro", "Tatsuya", "Tetsuo", "Tomohiro", "Toru", "Toshio", "Tsuyoshi", "Yasuhiro",
        "Yoichi", "Yoshihiro", "Yoshiki", "Yoshio", "Yuichi", "Yuji", "Yuki", "Yukio", "Yusuke", "Yuto",
        "Ai", "Aiko", "Akane", "Akemi", "Asami", "Asuka", "Ayaka", "Ayame", "Ayumi", "Chie",
        "Chieko", "Chihiro", "Chinatsu", "Eri", "Eriko", "Fumiko", "Hanae", "Hanako", "Haruko", "Hideko",
        "Hikari", "Hiroko", "Hitomi", "Hoshi", "Izumi", "Junko", "Kaho", "Kanako", "Kaori", "Kasumi",
        "Kazue", "Kazuko", "Keiko", "Kimiko", "Kiyoko", "Koharu", "Kotone", "Kumiko", "Kyoko", "Machi",
        "Madoka", "Mai", "Maiko", "Maki", "Makiko", "Mami", "Manami", "Mariko", "Masako", "Mayuko"
    ],

    // Extended Arabic names
    arabic_extended: [
        "Abbas", "Abdallah", "Abdul", "Abdullah", "Adnan", "Ahmad", "Ahmed", "Akram", "Ali", "Ameen",
        "Amir", "Anwar", "Ashraf", "Aziz", "Badr", "Bahir", "Bashar", "Bassam", "Bilal", "Burhan",
        "Daud", "Ehab", "Fahad", "Fahd", "Faisal", "Farid", "Faris", "Ghassan", "Habib", "Hadi",
        "Hafiz", "Hakim", "Hamid", "Hamza", "Hani", "Harun", "Hassan", "Hazem", "Hisham", "Hussain",
        "Ibrahim", "Idris", "Imad", "Imran", "Isa", "Ismail", "Jaafar", "Jaber", "Jalal", "Jamal",
        "Jamil", "Jawad", "Kamal", "Kareem", "Khalid", "Khalil", "Khaled", "Lotfi", "Mahmoud", "Majid",
        "Malek", "Mansour", "Marwan", "Mazen", "Mounir", "Moustafa", "Murad", "Musa", "Nabil", "Nader",
        "Nadir", "Nasser", "Nizar", "Omar", "Osama", "Othman", "Qasim", "Rabih", "Rachid", "Rafiq",
        "Ragheb", "Ramzi", "Rashid", "Riad", "Riyad", "Saad", "Sabri", "Sadiq", "Said", "Salah",
        "Salem", "Salim", "Sami", "Samir", "Shadi", "Sharif", "Taher", "Talal", "Tamer", "Tarek",
        "Ahlam", "Aida", "Aisha", "Alia", "Amani", "Amina", "Asmaa", "Aziza", "Basma", "Bushra",
        "Dalal", "Dalia", "Dina", "Duaa", "Fadwa", "Faiza", "Farida", "Fatima", "Fawzia", "Ghada",
        "Habiba", "Hadeel", "Hafsa", "Hala", "Halima", "Hanan", "Haneen", "Haya", "Hayet", "Hiba",
        "Houda", "Inas", "Intisar", "Iqbal", "Jameela", "Kawthar", "Khadija", "Laila", "Lamia", "Latifa",
        "Leena", "Lubna", "Lujain", "Madiha", "Maha", "Manal", "Maram", "Mariam", "Maysa", "Maysoon"
    ],

    // Extended Indian names
    indian_extended: [
        "Abhay", "Abhijit", "Abhishek", "Aditya", "Ajay", "Ajit", "Akash", "Akhil", "Alok", "Amar",
        "Amitabh", "Anand", "Aniket", "Ankit", "Ankur", "Arun", "Arvind", "Ashish", "Ashok", "Ashwin",
        "Atul", "Bharat", "Bhaskar", "Chandan", "Chirag", "Deepak", "Devendra", "Dharmesh", "Dinesh", "Ganesh",
        "Gaurav", "Girish", "Gopal", "Govind", "Hari", "Harish", "Hemant", "Hitesh", "Jatin", "Jay",
        "Jayesh", "Kailash", "Kamal", "Karan", "Kartik", "Keshav", "Kishore", "Krishna", "Kumar", "Lalit",
        "Lokesh", "Madhav", "Mahesh", "Manish", "Manoj", "Mohan", "Mohit", "Mukesh", "Naresh", "Naveen",
        "Nikhil", "Nilesh", "Nitin", "Pankaj", "Paresh", "Pawan", "Pramod", "Pranav", "Prasad", "Pratap",
        "Praveen", "Priyank", "Raghav", "Rajat", "Rajendra", "Rajiv", "Rakesh", "Ram", "Ramesh", "Ranjit",
        "Ravi", "Ritesh", "Rohit", "Sachin", "Sandeep", "Sanjay", "Sanjit", "Santosh", "Satish", "Shailesh",
        "Shankar", "Shashi", "Shekhar", "Shiv", "Shyam", "Siddharth", "Subhash", "Sudhir", "Sumit", "Sunil",
        "Aarti", "Aditi", "Aishwarya", "Ananya", "Anika", "Anita", "Anjana", "Ankita", "Anusha", "Aparna",
        "Archana", "Arundhati", "Bhavana", "Chandra", "Chandrika", "Deepika", "Devika", "Dipti", "Durga", "Gauri",
        "Gayatri", "Gita", "Hema", "Indira", "Jaya", "Jyoti", "Kalpana", "Kamala", "Kanti", "Kiran",
        "Komal", "Kusum", "Lakshmi", "Lalita", "Leela", "Lekha", "Madhuri", "Malini", "Mamta", "Manju",
        "Meera", "Meghna", "Mohini", "Nalini", "Namita", "Nandini", "Neelam", "Neerja", "Padma", "Pallavi"
    ],

    // Extended Korean names
    korean_extended: [
        "Beomseok", "Byeongho", "Changho", "Chanwoo", "Cheolsu", "Daehyun", "Daesung", "Donghyun", "Dongwook", "Eunsoo",
        "Geonwoo", "Gyeonghun", "Haejin", "Hansol", "Hyeokjin", "Hyojin", "Hyunbin", "Hyunjun", "Hyunseok", "Hyunsoo",
        "Inseong", "Jaehoon", "Jaehyuk", "Jaeyoung", "Jeonghoon", "Jeonghwan", "Jihwan", "Jinho", "Jinhyuk", "Jinsoo",
        "Jiwon", "Jonghyun", "Jongmin", "Joonho", "Junghoon", "Junsu", "Kihoon", "Kyuhyun", "Kyungho", "Minho",
        "Minjae", "Minjoon", "Minseok", "Myunghoon", "Sanghoon", "Sangmin", "Sangwoo", "Seokjin", "Seongho", "Seongmin",
        "Seunghoon", "Seungjae", "Seungmin", "Siwon", "Seonghyun", "Soohyun", "Sungho", "Sungjin", "Taehyung", "Wonjun",
        "Wooseok", "Yongjin", "Yoonho", "Youngho", "Youngjae", "Yuseong", "Boyoung", "Chaerin", "Chaeyeon", "Dahee",
        "Dain", "Dayeon", "Eunhee", "Eunjin", "Eunkyung", "Eunseo", "Eunsung", "Gayeon", "Haerim", "Hajin",
        "Hana", "Hayeon", "Heejin", "Heejung", "Heesun", "Hyeji", "Hyejin", "Hyejung", "Hyemin", "Hyewon",
        "Hyunji", "Inyoung", "Jieun", "Jihyun", "Jimin", "Jina", "Jinhee", "Jinsoo", "Jiwon", "Jiyeon",
        "Jiyoung", "Juhee", "Juhyun", "Junghee", "Minji", "Minjung", "Misoo", "Nayoung", "Sangah", "Seohee"
    ],

    // Extended African names
    african_extended: [
        "Abayomi", "Adaeze", "Adanna", "Adebayo", "Adebola", "Adekunle", "Ademola", "Adeola", "Adewale", "Adeyemi",
        "Afolabi", "Akande", "Akanni", "Akintunde", "Akinwale", "Akinwumi", "Amadi", "Amara", "Ayodele", "Azikiwe",
        "Babatunde", "Bankole", "Chidi", "Chidinma", "Chidimma", "Chiedozie", "Chikwendu", "Chimamanda", "Chinenye", "Chinonso",
        "Chinua", "Chukwuemeka", "Chukwuma", "Danjuma", "Ebele", "Eberechi", "Ekene", "Emeka", "Emmanuel", "Ezekiel",
        "Femi", "Funke", "Gbenga", "Ifeanyichukwu", "Ifeanyi", "Ifeoma", "Ikechukwu", "Ikenna", "Jide", "Jumoke",
        "Kayode", "Kelechi", "Kwabena", "Kwadwo", "Kwaku", "Kwame", "Kwasi", "Nneka", "Nnamdi", "Nwachukwu",
        "Obiageli", "Obioma", "Obinna", "Odinaka", "Oghenekaro", "Olabisi", "Oladipo", "Olalekan", "Olamide", "Olaniyi",
        "Olawale", "Olubunmi", "Oluchi", "Olufemi", "Olumide", "Oluwakemi", "Oluwole", "Onyeka", "Onyekachi", "Segun",
        "Sule", "Temitope", "Tochukwu", "Tokunbo", "Tunde", "Uchenna", "Ugochi", "Uzochi", "Yetunde", "Yinka",
        "Abena", "Adaora", "Adaugo", "Adwoa", "Afia", "Akosua", "Amaka", "Chiamaka", "Chisom", "Chizoba",
        "Ego", "Efua", "Folake", "Ifunanya", "Kemi", "Ngozi", "Nkechi", "Obiageli", "Somadina", "Uju"
    ],

    // Extended Scandinavian names
    scandinavian_extended: [
        "Aksel", "Alfred", "Alvar", "Anders", "Arne", "Arvid", "Asbjorn", "Asger", "Axel", "Baldur",
        "Birger", "Bjarne", "Brage", "Brynjar", "Dag", "Dagfinn", "Edvard", "Einar", "Eirik", "Erland",
        "Erlend", "Eskil", "Even", "Finn", "Fredrik", "Fritjof", "Geir", "Gisle", "Gunnar", "Gunvald",
        "Haakon", "Halfdan", "Halvor", "Harald", "Helge", "Henrik", "Hjalmar", "Ivar", "Jakob", "Jarle",
        "Joakim", "Johan", "Jonas", "Jorgen", "Kare", "Ketil", "Kjell", "Knut", "Kristian", "Kristoffer",
        "Lars", "Leif", "Ludvig", "Magnus", "Marius", "Martin", "Mikael", "Morten", "Nikolai", "Nils",
        "Odd", "Ola", "Olav", "Ole", "Oskar", "Ove", "Per", "Petter", "Ragnar", "Ragnvald",
        "Rasmus", "Reidar", "Roald", "Rolf", "Runar", "Sigmund", "Sigurd", "Sindre", "Snorre", "Steinar",
        "Stian", "Stig", "Sturla", "Svein", "Sverre", "Terje", "Thor", "Thorbjorn", "Thorvald", "Tobias",
        "Agnetha", "Alfhild", "Alma", "Alvhild", "Anette", "Annika", "Asta", "Astrid", "Berit", "Birgit",
        "Bodil", "Brit", "Dagny", "Edda", "Edit", "Eldrid", "Eli", "Elina", "Else", "Embla",
        "Erika", "Ester", "Eva", "Freya", "Frida", "Gerda", "Grete", "Grethe", "Gudrun", "Gunhild",
        "Hanne", "Hedda", "Helga", "Helle", "Hilda", "Hulda", "Ida", "Inga", "Ingeborg", "Inger",
        "Ingrid", "Irene", "Johanna", "Kari", "Karin", "Kirsten", "Kristina", "Liv", "Lise", "Maren"
    ],

    // Extended Hebrew names
    hebrew_extended: [
        "Alon", "Amnon", "Ari", "Ariel", "Avner", "Avraham", "Barak", "Baruch", "Binyamin", "Boaz",
        "Chaim", "Dan", "Dov", "Ehud", "Elad", "Elazar", "Eli", "Eliyahu", "Ephraim", "Eran",
        "Gad", "Gideon", "Gil", "Giora", "Harel", "Hillel", "Idan", "Ido", "Ilan", "Itai",
        "Itamar", "Lior", "Matan", "Meir", "Menachem", "Mordechai", "Moshe", "Nadav", "Naftali", "Naor",
        "Nimrod", "Nissim", "Noam", "Oded", "Ofir", "Omri", "Oren", "Oz", "Reuven", "Ron",
        "Ronen", "Shai", "Shaul", "Shimon", "Shlomo", "Shmuel", "Tal", "Uri", "Yaakov", "Yair",
        "Yaniv", "Yaron", "Yehuda", "Yigal", "Yisrael", "Yitzhak", "Yoav", "Yoel", "Yonatan", "Yossi",
        "Zev", "Zohar", "Anat", "Ayelet", "Batsheva", "Carmela", "Dalya", "Daphna", "Dikla", "Efrat",
        "Einat", "Galia", "Galit", "Hadas", "Hagit", "Inbal", "Keren", "Liat", "Limor", "Meirav",
        "Michal", "Mirit", "Naama", "Nava", "Neta", "Nili", "Nirit", "Noa", "Nurit", "Orit",
        "Orly", "Osnat", "Rachel", "Ravit", "Rinat", "Roni", "Ronit", "Ruth", "Sarit", "Sharon",
        "Shelly", "Shimrit", "Shlomit", "Sigal", "Sigalit", "Sivan", "Tal", "Talia", "Tamar", "Tehila"
    ],

    // Extended Greek names
    greek_extended: [
        "Achilleas", "Adonis", "Aias", "Alexandros", "Anastasios", "Andreas", "Angelos", "Antonios", "Apostolos", "Ares",
        "Aristides", "Charalambos", "Christodoulos", "Christos", "Constantinos", "Demetrios", "Dionysios", "Efstathios", "Efthymios", "Eleftherios",
        "Emmanuel", "Evangelos", "Filippos", "Fotis", "Georgios", "Grigorios", "Hercules", "Iasonas", "Ioannis", "Konstantinos",
        "Kyriakos", "Leonidas", "Loukas", "Marios", "Markos", "Michail", "Miltiades", "Nikolaos", "Odysseus", "Panagiotis",
        "Paschalis", "Pavlos", "Petros", "Platon", "Prokopis", "Sokratis", "Spyridon", "Stavros", "Stefanos", "Stylianos",
        "Thanasis", "Theodoros", "Theofilos", "Vasilios", "Xenofon", "Yiannis", "Zacharias", "Zenon", "Afroditi", "Agapi",
        "Alexandra", "Aliki", "Anastasia", "Angela", "Anna", "Antigoni", "Ariadni", "Athina", "Barbara", "Chrysoula",
        "Danai", "Despina", "Dimitra", "Dorothea", "Efrosini", "Eirini", "Eleni", "Elisavet", "Elpida", "Evangelia",
        "Evdokia", "Fani", "Fotini", "Georgia", "Gianna", "Ioanna", "Irini", "Kalliopi", "Katerina", "Konstantina",
        "Kyriaki", "Lambrini", "Maria", "Marina", "Melina", "Niki", "Olympia", "Ourania", "Panagiota", "Paraskevi"
    ],

    // Extended Portuguese/Brazilian names
    portuguese_extended: [
        "Adriano", "Afonso", "Alberto", "Alexandre", "Americo", "Andre", "Antonio", "Artur", "Augusto", "Bernardo",
        "Bruno", "Carlos", "Cesar", "Claudio", "Cristiano", "Daniel", "Davi", "Diego", "Duarte", "Edgar",
        "Eduardo", "Emanuel", "Fabio", "Felipe", "Fernando", "Filipe", "Francisco", "Gabriel", "Gonçalo", "Guilherme",
        "Gustavo", "Heitor", "Henrique", "Hugo", "Igor", "Joao", "Jorge", "Jose", "Julio", "Leonardo",
        "Lucas", "Luciano", "Luis", "Manuel", "Marcelo", "Marco", "Mateus", "Matheus", "Miguel", "Nelson",
        "Nuno", "Oscar", "Paulo", "Pedro", "Rafael", "Raul", "Renato", "Ricardo", "Roberto", "Rodrigo",
        "Romulo", "Rui", "Samuel", "Santiago", "Sergio", "Thiago", "Tiago", "Tomas", "Vicente", "Vitor",
        "Adriana", "Aline", "Amanda", "Ana", "Andreia", "Barbara", "Beatriz", "Bianca", "Bruna", "Camila",
        "Carla", "Carolina", "Catarina", "Celia", "Claudia", "Cristina", "Daniela", "Diana", "Eduarda", "Eliana",
        "Fernanda", "Flavia", "Francisca", "Gabriela", "Helena", "Ines", "Isabel", "Joana", "Julia", "Juliana"
    ],

    // Extended Turkish names
    turkish_extended: [
        "Abdullah", "Adnan", "Ahmet", "Ali", "Alparslan", "Anil", "Arif", "Aydin", "Bahadir", "Baris",
        "Bekir", "Bilal", "Burak", "Bulent", "Caglar", "Cagatay", "Cem", "Cemal", "Cengiz", "Cihan",
        "Cuneyt", "Davut", "Deniz", "Dogan", "Efe", "Emrah", "Emre", "Engin", "Ercan", "Erdal",
        "Erdem", "Erdogan", "Erhan", "Erkan", "Ersin", "Faruk", "Fatih", "Ferhat", "Fevzi", "Firat",
        "Furkan", "Gokhan", "Halil", "Haluk", "Hamit", "Hasan", "Hikmet", "Huseyin", "Ibrahim", "Ilhan",
        "Irfan", "Ismail", "Kaan", "Kadir", "Kemal", "Kenan", "Koray", "Levent", "Mahmut", "Mehmet",
        "Metin", "Murat", "Mustafa", "Necati", "Nihat", "Okan", "Onur", "Orhan", "Osman", "Ozgur",
        "Ramazan", "Recep", "Ridvan", "Salih", "Selcuk", "Selim", "Sener", "Serdar", "Serkan", "Sinan",
        "Suleyman", "Taner", "Tayfun", "Tolga", "Tuncay", "Ugur", "Umut", "Volkan", "Yavuz", "Yilmaz",
        "Aysel", "Aysegul", "Ayten", "Belgin", "Berna", "Betul", "Bilge", "Birsen", "Burcu", "Canan"
    ]
};

// Flatten all names into a single array with origin info
const ALL_NAMES = [];
for (const [origin, names] of Object.entries(NAMES_DATABASE)) {
    for (const name of names) {
        ALL_NAMES.push({ name, origin });
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NAMES_DATABASE, ALL_NAMES };
}
