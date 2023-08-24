import { Box, Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Box sx={{ flex: 1 }}>
        <Skeleton variant="rounded" width={300} height={150} />

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Skeleton
            variant="text"
            sx={{ fontSize: 20 }}
            width={150}
            height={50}
          />
          <Skeleton variant="rounded" width={150} height={50} />
        </Box>
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="rectangular" width={600} height={500} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Skeleton variant="rounded" width={300} height={150} />

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Skeleton
            variant="text"
            sx={{ fontSize: 20 }}
            width={150}
            height={50}
          />
          <Skeleton variant="rounded" width={150} height={50} />
        </Box>
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="rectangular" width={600} height={500} />
      </Box>
    </Box>
  );
}
