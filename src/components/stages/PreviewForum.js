import { Box, Image, Flex, Link } from '@chakra-ui/react';
import logo from '../../images/logo.png';

const PreviewForum = (forum) => {
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
                <Image src={logo} w='10rem' maxW={'100%'} />
            </Box>
            <Box>
                <Flex
                    gap={3}
                    flexDirection={{ base: 'column', sm: 'row' }}
                    align={'center'}
                >
                    <Link
                        _hover={{ textDecoration: 'none' }}
                        href={forum.thread}
                        target={'_blank'}
                    ></Link>
                </Flex>
            </Box>
        </Flex>
    );
};

export default PreviewForum;
