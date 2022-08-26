import moment from 'moment';

export function getBBCode2(forum, weeklyUser, weeklyThread) {
    const medalImage = 'https://images.weserv.nl/?url=i.imgur.com/ThPiUoI.png';
    const winnerColor = '#daa520'; // if there is a single winner - this will be the font-color.
    const grayColor = '#696969';
    const nowDate = moment().format('DD/MM/YY');

    return `[FONT=almoni-dl][CENTER][IMG]${forum.logo}[/IMG]
[SIZE=5]
[COLOR=#0099ff]אתגר שבועי:[/COLOR][/SIZE][COLOR=#0099ff]
[B][SIZE=6]משקיען השבוע ואשכול השבוע[/SIZE][/B][/COLOR]
[SIZE=2]פורום [B]${forum.name}[/B][/SIZE]

[SIZE=3]מידי שבוע הנהלת הפורום דואגת לפרגן למשתמשי הפורום שהנוכחות שלהם במהלך השבוע הייתה משמעותית בפורום.[/SIZE]
[SIZE=3]מה זה בעצם אומר על הזוכים? - הראו נוכחות באשכולות, ענו תשובות מושקעות, תרמו מהידע ומזמנם, פרסמו אשכולות רלוונטים ועוד...[/SIZE]

[SIZE=3]כמו כן גם שמירת על [/SIZE][U]חוקי הפורום[/U] [SIZE=3]זה תנאי הכרחי לקבלת הפרס ובעצם הזוכה באשכול השבוע יזכה ב[/SIZE][SIZE=4][B]לא פחות[/B][/SIZE][SIZE=3] מ[/SIZE][U][COLOR=#66ccff][SIZE=4][B]7 ימי ווינר[/B][/SIZE][/COLOR][/U][SIZE=3]![/SIZE]


[U][SIZE=4][B]מהי דרגת ה-[COLOR=#66ccff]Winner[/COLOR]?[/B][/SIZE][/U]

[B]דרגת הווינר כוללת:[/B]
[SIZE=3]- גישה לפורום היכל התהילה, מכיל פעילויות רבות והזמנות לזכות בפרסים נוספים.[/SIZE]
[SIZE=3]- כינוי ותת-ניק מעוצבים (אל תדאגו, דאגנו לכם לעיצוב מעניין ;))[/SIZE]


[B]בלי להוסיף מילה נוספת הזוכים או הזוכות לתאריך [COLOR=#3399ff]${nowDate}[/COLOR] הם/הן...[/B]

[SIZE=3][IMG]https://images.weserv.nl/?url=i.imgur.com/49v3iQt.png[/IMG][/SIZE]
${
    weeklyUser.length
        ? `[IMG]${medalImage}[/IMG] [URL="${weeklyUser[1]}"][COLOR=${winnerColor}][SIZE=5][B]${weeklyUser[0]}[/B][/SIZE][/COLOR][/URL] [IMG]${medalImage}[/IMG]`
        : `[IMG]${medalImage}[/IMG] [COLOR=${
              weeklyUser.length || weeklyThread.length ? winnerColor : grayColor
          }][SIZE=5][B]לא נמצא משקיען[/B][/SIZE][/COLOR] [IMG]${medalImage}[/IMG]`
}

[SIZE=3][IMG]https://images.weserv.nl/?url=i.imgur.com/Rb4j5af.png[/IMG][/SIZE]
${
    weeklyThread.length
        ? `[IMG]${medalImage}[/IMG] [URL="${weeklyThread[1]}"][COLOR=${winnerColor}][SIZE=5][B]${weeklyThread[0]}[/B][/SIZE][/COLOR][/URL] [IMG]${medalImage}[/IMG]`
        : `[IMG]${medalImage}[/IMG] [COLOR=${
              weeklyUser.length || weeklyThread.length ? winnerColor : grayColor
          }][SIZE=5][B]לא נמצא אשכול[/B][/SIZE][/COLOR] [IMG]${medalImage}[/IMG]`
}

[HR][/HR]
${
    weeklyThread.length || weeklyUser.length
        ? `[SIZE=3]כל הכבוד לזוכים השבוע, במידה ולא זכיתם זה בסדר לחלוטין,[/SIZE]
[SIZE=3]שבוע נוסף לפנינו והזדמנויות רבות מונחות לפנינו בכל יום מחדש![/SIZE]`
        : `[SIZE=3]לצערינו השבוע אין זוכים, מאחלים לכולם בהצלחה לקראת שבוע הבא.[/SIZE]
[SIZE=3]שבוע נוסף לפנינו והזדמנויות רבות מונחות לפנינו בכל יום מחדש![/SIZE]`
}

[SIZE=3]בברכה,[/SIZE]
[SIZE=3]הנהלת פורום [B]${forum.name}[/B][/SIZE][SIZE=3]
[IMG]https://images.weserv.nl/?url=i.imgur.com/DPZXQRv.png[/IMG][/SIZE]

[URL="https://www.fxp.co.il/terms.php"][COLOR=#000000]תנאי שימוש[/COLOR][/URL][COLOR=#000000] | [/COLOR][URL="https://www.fxp.co.il/copyright.php"][COLOR=#000000]זכויות יוצרים[/COLOR][/URL][/CENTER]
[/FONT]`;
}

export default function getBBCode(weeklyUser, weeklyThread) {
    const winnerColor = '#daa520'; // if there is a single winner - this will be the font-color.
    const grayColor = '#696969';

    console.log(weeklyThread);

    const nowDate = moment().format('DD/MM/YY');

    return `[CENTER][IMG]https://images.weserv.nl/?url=i.imgur.com/DPZXQRv.png[/IMG][SIZE=3][FONT=tahoma]
    [/FONT][/SIZE][IMG]https://i.imagesup.co/images2/663f22853101fd381160b0501b4bd28d79ff6076.png[/IMG]
    [SIZE=5][COLOR=#daa520][FONT=almoni-dl][B]הכרזת נבחרי היכל התהילה[/B][/FONT][/COLOR][/SIZE][SIZE=3][FONT=tahoma]
            [/FONT][SIZE=3][FONT=tahoma]גולשים יקרים!
            [COLOR=#000000]אחר שבוע מלא בפעילויות, דיונים בשלל נושאים, חנויות מגניבות ומשחקים מהנים ו[/COLOR]כמדי שבוע, יבחר המשתמש אשר השקיע ובלט מבין שאר הגולשים ואשכול מושקע ו/או שעניין את הגולשים.
          
          [U]אז, קבלו את משקיען ואשכול השבוע לתאריך [/U][/FONT][/SIZE][FONT=tahoma][U][B][COLOR=#008080]${nowDate}[/COLOR][/B] בפורום היכל התהילה:[/U][/FONT][/SIZE]
    [SIZE=3][FONT=tahoma]
    [/FONT][/SIZE][IMG]https://i.imagesup.co/images2/fd2d0a1d1c4cfffc0dd23a5ba8f3557e165a2105.png[/IMG]
    ${
        weeklyUser.length
            ? `[SIZE=3][FONT=tahoma][IMG]https://images.weserv.nl/?url=i.imgur.com/ThPiUoI.png[/IMG][SIZE=5][U][B][URL="${weeklyUser[1]}"][COLOR=#daa520]${weeklyUser[0]}[/COLOR][/URL][/B][/U][/SIZE][IMG]https://images.weserv.nl/?url=i.imgur.com/ThPiUoI.png[/IMG]
    [/FONT][/SIZE][IMG]https://i.imagesup.co/images2/b7b72934938d6820febebbab3078597a1829ea76.png[/IMG][SIZE=3][FONT=tahoma]
    [/FONT][FONT=tahoma][COLOR=#000000]במשך השבוע האחרון הפגנת פעילות גבוהה, השתתפות באשכולות ופעילויות. [/COLOR]הנך זוכה בלא פחות מ- [B][COLOR=#43c6db]7 ימי ווינר, [/COLOR][/B][B][COLOR=#a4de40]30 נקודות FxP[/COLOR] [COLOR=#000000]ואף תת ניק מעוצב[/COLOR][/B][B], כל הכבוד![/B][/FONT][/SIZE]`
            : `[SIZE=5][U][B][COLOR=#000000]לא נמצא משקיען[/COLOR][/B][/U][/SIZE]`
    }
    
    [IMG]https://images.weserv.nl/?url=i.imgur.com/tMcj3xu.png[/IMG][SIZE=3][FONT=tahoma]
    [/FONT][/SIZE][IMG]https://i.imagesup.co/images2/03ead3e48ea396065b11dd750c04e2a6b2ba9f78.png[/IMG]
    ${
        weeklyThread.length
            ? `[SIZE=3][FONT=tahoma][IMG]https://images.weserv.nl/?url=i.imgur.com/ThPiUoI.png[/IMG][SIZE=5][URL="${weeklyThread[2]}"][U][B][COLOR=#daa520]${weeklyThread[3]}[/COLOR][/B][/U][/URL][/SIZE][IMG]https://images.weserv.nl/?url=i.imgur.com/ThPiUoI.png[/IMG]
    
    [U][B][COLOR=#daa520]אשר פתח את האשכול[/COLOR][/B][/U]: [SIZE=4]"[URL="${weeklyThread[1]}"][B]${weeklyThread[0]}[/B][/URL]"[/SIZE]
               
    [/FONT][/SIZE][FONT=almoni-dl][SIZE=3][FONT=tahoma]כל הכבוד על פתיחת האשכול המושקע שבהחלט היה משמעותי בקרב המשתמשים. [/FONT][/SIZE][/FONT][SIZE=3][FONT=tahoma]הנך זוכה בלא פחות מ- [B][COLOR=#43c6db]7 ימי ווינר[/COLOR][COLOR=#a4de40] ו- 15 נקודות FxP, [/COLOR][COLOR=#000000]יישר כוח![/COLOR][/B]
    [/FONT][/SIZE]`
            : `[SIZE=5][U][B][COLOR=#000000]לא נמצא אשכול[/COLOR][/B][/U][/SIZE]`
    }   
    [SIZE=3][FONT=tahoma]
                [B][COLOR=#008080]
    ${
        weeklyThread.length > 0 || weeklyThread.length > 0
            ? `[U][SIZE=4]מזל טוב ובהצלחה בשבוע הבא לכולם![/SIZE][/U]`
            : `[U][SIZE=4]בהצלחה בשבוע הבא לכולם![/SIZE][/U]`
    }
    [/COLOR][/B]
    
    [/FONT][FONT=tahoma][SIZE=4][B][COLOR=#43c6db]בברכת סוף שבוע נעים,
    הנהלת היכל התהילה – FxP. [/COLOR]:flowers:[/B][/SIZE][/FONT][FONT=tahoma]
    [/FONT][/SIZE][IMG]https://images.weserv.nl/?url=i.imgur.com%2F3UsHYTn.png[/IMG][/CENTER]`;
}
