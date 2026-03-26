import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IoBookSharp } from "react-icons/io5";
import { IoMdAnalytics } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { CiMap, CiBookmark, CiMusicNote1, CiCamera } from "react-icons/ci";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";

const Data = [
  {
    id: 1,
    title: "Digital Library",
    description:
      "Access a wide collection of books, PDFs, and learning materials anytime.",
    icon: <IoBookSharp size={40} />,
    color: "#EF4040",
    bgColor: "#FFDCD1",
  },
  {
    id: 2,
    title: "Video Lessons",
    description:
      "Learn through high-quality video tutorials from experienced instructors.",
    icon: <MdOutlineOndemandVideo size={40} />,
    color: "#4070EF",
    bgColor: "#D1E0FF",
  },
  {
    id: 3,
    title: "Progress Tracking",
    description:
      "Monitor your learning journey and track your course completion easily.",
    icon: <IoMdAnalytics size={40} />,
    color: "#20A850",
    bgColor: "#D1FFE2",
  },
  {
    id: 4,
    title: "Expert Instructors",
    description:
      "Learn from professional teachers with real-world experience.",
    icon: <FaChalkboardTeacher size={40} />,
    color: "#A840EF",
    bgColor: "#EDD1FF",
  },
];
export default function CardsGrid() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        justifyContent: "center",
        padding: 6,
        backgroundColor: "#f9fafb",
        minHeight: "40vh",
      }}
    >
      {Data.map((item) => (
        <Card
          key={item.id}
          sx={{
            width: 270,
            borderRadius: 4,
            cursor: "pointer",
            overflow: "hidden",
            boxShadow: "0 6px 25px rgba(0,0,0,0.06)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: "0 15px 45px rgba(0,0,0,0.15)",
            },
          }}
        >
          {/* ICON SECTION */}
          <Box
            sx={{
              backgroundColor: item.bgColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 110,
              borderBottom: "1px solid #eee",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "50%",
                padding: 2,
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                color: item.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </Box>
          </Box>

          {/* CONTENT */}
          <CardContent sx={{ padding: 3 }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontWeight={700}
            >
              {item.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                lineHeight: 1.7,
                fontSize: "0.95rem",
              }}
            >
              {item.description}
            </Typography>
          </CardContent>

          {/* ACTION */}
          <CardActions sx={{ padding: "0 16px 16px" }}>
            <Button
              size="small"
              sx={{
                color: item.color,
                fontWeight: 600,
                textTransform: "none",
              }}
            >
              Explore →
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}