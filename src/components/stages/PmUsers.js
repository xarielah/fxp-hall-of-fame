import { Box, Button, Flex, Link, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const PmUsers = ({ weeklyUser, weeklyThread, setShowCodeStatus }) => {
    const [pmUser, setPmUser] = useState(!weeklyUser.length);
    const [pmThread, setPmThread] = useState(!weeklyThread.length);
    const [wording, setWording] = useState(
        !weeklyThread.length && !weeklyUser.length,
    );

    const pmLink = 'https://www.fxp.co.il/private.php?do=newpm&u=';
    const nosahim = 'https://www.fxp.co.il/showthread.php?t=21213781';

    useEffect(() => {
        console.log(pmThread, pmUser, wording);
        if (pmUser && pmThread && wording) {
            setShowCodeStatus(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pmUser, pmThread, wording]);

    function getUrl(url) {
        const urlObject = new URL('', url);
        const urlParam = new URLSearchParams(urlObject.search);
        const id = urlParam.get('u');
        if (id) {
            return `${pmLink}${id}`;
        } else return '#';
    }

    return (
        <Box mb={7}>
            <Flex
                flexDirection={'column'}
                gap={3}
                bg='gray.100'
                borderRadius={'md'}
                py={5}
            >
                <Heading color='red' size='md' textDecoration={'underline'}>
                    לא לשכוח לשלוח הודעות פרטיות לזוכים!
                </Heading>
                <Flex
                    gap={2}
                    justify={'center'}
                    flexDirection='column'
                    w='max-content'
                    margin={'0 auto'}
                >
                    <Link
                        _hover={{ textDecoration: 'none' }}
                        target='_blank'
                        href={nosahim}
                        onClick={() => setWording(true)}
                    >
                        <Button
                            colorScheme={`${!wording ? 'red' : 'messenger'}`}
                            size='sm'
                            w='100%'
                        >
                            נוסח לשליחת הודעות פרטיות {wording && '✔️'}
                        </Button>
                    </Link>
                    {weeklyUser.length > 0 && (
                        <Link
                            _hover={{ textDecoration: 'none' }}
                            target='_blank'
                            href={getUrl(weeklyUser[1])}
                            onClick={() => setPmUser(true)}
                        >
                            <Button
                                colorScheme={`${!pmUser ? 'red' : 'messenger'}`}
                                size='sm'
                                w='100%'
                            >
                                ה"פ למשקיען {weeklyUser[0]} {pmUser && '✔️'}
                            </Button>
                        </Link>
                    )}
                    {weeklyThread.length > 0 && (
                        <Link
                            _hover={{ textDecoration: 'none' }}
                            target='_blank'
                            href={getUrl(weeklyThread[2])}
                            onClick={() => setPmThread(true)}
                        >
                            <Button
                                colorScheme={`${
                                    !pmThread ? 'red' : 'messenger'
                                }`}
                                size='sm'
                                w='100%'
                            >
                                ה"פ לפותח אשכול השבוע {pmThread && '✔️'}
                            </Button>
                        </Link>
                    )}
                </Flex>
            </Flex>
        </Box>
    );
};

export default PmUsers;
