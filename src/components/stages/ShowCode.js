import { Flex, Textarea, Button, Text, Box } from '@chakra-ui/react';
import Notes from '../general/Notes';
import getBBCode from '../../data/getBBCode';
import { useState } from 'react';
import PmUsers from './PmUsers';

const ShowCode = ({ weeklyUser, weeklyThread, forum }) => {
    console.log(forum);
    const [isOpen, setOpen] = useState(true);
    const [copied, setCopied] = useState(false);
    const [showCodeStatus, setShowCodeStatus] = useState(
        weeklyThread.length || weeklyUser.length ? false : true,
    );
    const [revealCode, setRevealCode] = useState(false);

    const fullText = getBBCode(weeklyUser, weeklyThread);
    const copyText = () => {
        setCopied(true);
        navigator.clipboard
            .writeText(fullText)
            .then(() => window.open(forum.links.newThread, '_blank'));
    };

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
                    <Flex
                        gap={2}
                        flexDirection={{ base: 'column', md: 'row' }}
                        justifyContent={'center'}
                    >
                        <Button
                            onClick={copyText}
                            variant={'main-btn'}
                            w={{ base: '100%', md: 'max-content' }}
                        >
                            {copied
                                ? 'הקוד הועתק! ✔️'
                                : 'העתק קוד ופתח אשכול חדש'}
                        </Button>
                        <Button
                            variant={'main-btn'}
                            w={{ base: '100%', md: 'max-content' }}
                            onClick={swapReveal}
                        >
                            {revealCode ? 'הסתר קוד' : 'הצג קוד'}
                        </Button>
                    </Flex>
                    {revealCode && (
                        <Textarea
                            mt={3}
                            // rows={{ base: 8, md: 25 }}
                            rows={8}
                            value={fullText}
                            readOnly
                            bg={'#fafafa55'}
                        />
                    )}
                    <Box align='center' mt={5}>
                        <Button
                            variant={'red-btn'}
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
