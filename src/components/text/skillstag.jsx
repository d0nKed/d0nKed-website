import { Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react"

const SkillTag = ({ children, color, icon }) => {
    return (
        <Tag
            colorScheme={color}
            size={{ sm: "sm", md: "lg" }}
            m={1}
            p={2}
            style={{ transition: "all .1s ease-in-out" }}
            _hover={{ transform: "translate(0, -2px)", boxShadow: "md" }}
        >
            <TagLeftIcon as={icon} />
            <TagLabel>{children}</TagLabel>
        </Tag>
    )
}

export default SkillTag