import { Flex, Textarea, Button, Text, Box } from '@chakra-ui/react';
import Notes from '../general/Notes';
import getBBCode from '../../data/getBBCode';
import { useState } from 'react';
import PmUsers from './PmUsers';

const ShowCode = ({ weeklyUser, weeklyThread, forum }) => {
    const [isOpen, setOpen] = useState(true);
    const [copied, setCopied] = useState(false);
    const [showCodeStatus, setShowCodeStatus] = useState(
        weeklyThread.length || weeklyUser.length ? false : true,
    );
    const [revealCode, setRevealCode] = useState(false);

    const fullText = getBBCode(weeklyUser, weeklyThread);
    const copyText = () => navigator.clipboard.writeText(fullText);

    const swapReveal = () => setRevealCode((prev) => !prev);

    const close = () => setOpen(false);

    return (
        <Flex justifyContent={'center'} flexDirection='column'>
            {isOpen && <Notes close={close} />}

            <Box align='center'>
                {(weeklyThread.length > 0 || weeklyUser.length > 0) && (
                    <PmUsers
                        weeklyUser={weeklyUser}
                        weeklyThread={weeklyThread}
                        setShowCodeStatus={(bool) => setShowCodeStatus(bool)}
                    />
                )}
            </Box>
            {!showCodeStatus ? (
                <Box
                    bg={'#333333'}
                    color='white'
                    textAlign={'center'}
                    p={5}
                    borderRadius='md'
                >
                    <Text fontWeight={'bold'}>
                        עלייך לשלוח קודם ה"פ לזוכים ולאחר מכן הקוד יופיע כאן.{' '}
                        {':)'}
                    </Text>
                </Box>
            ) : (
                <>
                    <Flex gap={2} flexDirection={{ base: 'row', md: 'column' }}>
                        <Button
                            mb={3}
                            size='sm'
                            colorScheme={'messenger'}
                            onClick={() => {
                                copyText();
                                setCopied(true);
                            }}
                            w='100%'
                        >
                            {copied ? 'הקוד הועתק! ✔️' : 'העתק נוסח ללוח'}
                        </Button>
                        <Button
                            colorScheme={'whatsapp'}
                            size={'sm'}
                            onClick={swapReveal}
                            mb={revealCode ? 2 : 0}
                            w='100%'
                        >
                            {revealCode ? 'הסתר קוד' : 'הצג קוד'}
                        </Button>
                    </Flex>
                    {revealCode && (
                        <Textarea
                            rows={{ base: 8, md: 10 }}
                            value={fullText}
                            readOnly
                        />
                    )}
                    <Box align='center' mt={5}>
                        <Button
                            colorScheme='red'
                            size='sm'
                            onClick={() => (window.location.href = '/')}
                        >
                            אפס הכל
                        </Button>
                    </Box>
                </>
            )}
        </Flex>
    );
};

export default ShowCode;
