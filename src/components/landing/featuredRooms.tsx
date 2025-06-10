import { LoadingSpinner } from "@/components";
import { RoomCard } from "@/components/cards";
import { fadeInUp } from "@/lib/animations";
import { useRooms } from "@/lib/hooks/useRooms";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export const FeaturedRooms = () => {
  const { rooms, isLoading } = useRooms();
  const featured = rooms.slice(0, 3);

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.8 }}
      className="py-16 px-4 bg-gray-50"
    >
      <h2 className="text-4xl font-semibold text-center mb-8 text-montrose-red">Featured Rooms</h2>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 md:grid-cols-3"
        >
          {featured.map((r) => (
            <motion.div key={r.id} variants={fadeInUp}>
              <RoomCard
                {...r}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
};
