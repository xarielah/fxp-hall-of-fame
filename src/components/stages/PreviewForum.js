import { Box, Image, Button, Flex, Link } from '@chakra-ui/react';

const PreviewForum = ({ forum }) => {
    console.log(forum);
    return (
        <Flex
            flexDirection={'column'}
            justify={'center'}
            align={'center'}
            mb={5}
            bg={'#33333388'}
            color={'white'}
            py={3}
            px={1}
            margin={'0 auto 2em'}
            boxShadow={'0 0 10px #33333377'}
            borderRadius={'md'}
        >
            <Box>
                <Link target={'_blank'} href={forum.links.forum}>
                    <Image src={forum.logo} w='10rem' maxW={'100%'} />
                </Link>
            </Box>
            <Box>
                <Flex
                    gap={3}
                    flexDirection={{ base: 'column', sm: 'row' }}
                    align={'center'}
                    px={4}
                >
                    <Link
                        href={forum.links.debate}
                        textDecoration={'underline'}
                        target={'_blank'}
                    >
                        קישור להגשת מועמדים
                    </Link>{' '}
                    |{' '}
                    <Link
                        href={forum.links.new}
                        textDecoration={'underline'}
                        target={'_blank'}
                    >
                        פתיחת אשכול בהיכל
                    </Link>
                </Flex>
            </Box>
        </Flex>
    );
};

export default PreviewForum;
