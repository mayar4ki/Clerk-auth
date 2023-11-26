import ApiIcon from '@mui/icons-material/Api';
import DoneIcon from '@mui/icons-material/Done';
import {
  Box,
  Divider,
  Link,
  ListItemButton,
  Popover,
  Stack,
  Typography
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { forwardRef, useImperativeHandle, useState } from "react";

const NotificationListItem = () => {

  return (
    <>
      <ListItemButton
      // sx={{
      //   ...(!notification.seen && {
      //     backgroundColor: "grey.100",
      //   }),
      // }}
      >
        <ListItemAvatar>
          <Avatar>
            <ApiIcon />
          </Avatar>
        </ListItemAvatar>

        <Stack direction="row" sx={{ width: "100%" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1">Title</Typography>
            <Typography variant="body2" color="grey.700">
              {new Date().toLocaleString()}
            </Typography>
            <Typography variant="body2" color="grey.700">
              {""}
            </Typography>
          </Box>

          <Stack justifyContent="end">
            <DoneIcon
              sx={{
                fontSize: 12,
                color: "grey.600",
              }}
            />
          </Stack>
        </Stack>
      </ListItemButton>
      <Divider />
    </>
  );
};

export interface NotificationPopoverProps { }
export interface NotificationPopoverRef {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const NotificationPopover = forwardRef<NotificationPopoverRef, NotificationPopoverProps>((props, ref) => {
  useImperativeHandle(ref, () => ({ handleClick }), [])

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };


  const open = Boolean(anchorEl);
  const id = open ? "notification-popover" : undefined;





  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ px: 1, py: 0.5 }}
          columnGap={15}
        >
          <Typography color="primary" variant="subtitle2">
            {" "}
            Notifications
          </Typography>
          <Link
            color="primary"
            variant="caption"
            href="#"
          >
            Mark All as Read
          </Link>
        </Stack>

        <Divider />

        <Box
          component="div"
          sx={{
            maxHeight: 300,
            width: 360,
            overflow: "auto",
            overflowY: "auto",
          }}
        >

          {[1, 2, 3].map((item, i) => {
            return <NotificationListItem key={i} />;
          })}

        </Box>
        <Divider />
        <Stack
          direction="row"
          sx={{ px: 1, py: 1.5 }}
          justifyContent="center"
        ></Stack>
      </Popover>
    </>
  );
});
