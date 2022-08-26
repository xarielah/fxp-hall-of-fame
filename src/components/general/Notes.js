import { Heading, OrderedList, ListItem, Text } from '@chakra-ui/react';
import PopupModal from './PopupModal';

const Notes = () => {
    return (
        <PopupModal title={'לא סיימתם :)'} hideButton={true} defaultOpen={true}>
            <Heading color={'messenger.500'} size='lg' my={4}>
                לא לשכוח:
            </Heading>
            <OrderedList>
                <ListItem>לשלוח הודעה פרטית לזוכים באתגר.</ListItem>
                <ListItem>
                    לעדכן את המפקח בקישור ההכרזה באשכול הרלוונטי לכך.
                </ListItem>
            </OrderedList>
            <Text
                fontWeight={'bold'}
                color={'red'}
                mt={5}
                textDecoration={'underline'}
            >
                לנוחיותכם מצורפים קישורים לאשכול דיון על הזוכים + אתגר בפורום
                שלכם.
            </Text>
        </PopupModal>
    );
};

export default Notes;
