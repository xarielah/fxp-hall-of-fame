import { Heading, OrderedList, ListItem } from '@chakra-ui/react';
import PopupModal from './PopupModal';

const Updates = () => {
    return (
        <PopupModal
            buttonLabel={'עדכון אחרון'}
            title={'תאריך עדכון אחרון - 13.08.22'}
        >
            <Heading color={'messenger.500'} size='lg' my={4}>
                שינויים אחרונים
            </Heading>
            <OrderedList>
                <ListItem>שינוי עיצובי.</ListItem>
                <ListItem>בחירת הפורום אפשרית רק במסך פתיחה.</ListItem>
                <ListItem>נוסף כפתור חזור לאחר בחירת הפורום.</ListItem>
                <ListItem>נוסף מסך תצוגה מקדימה ללוגו של הפורום.</ListItem>
                <ListItem>
                    נוספו קישורים לאתגרים הרלוונטיים בפורום + אשכול דיון על
                    הזוכים.
                </ListItem>
                <ListItem>
                    אופן התצוגה של רשימת תזכורת לסיום האתגרים השבועיים נעשית כעת
                    במודל פופ-אפ.
                </ListItem>
            </OrderedList>
        </PopupModal>
    );
};

export default Updates;
