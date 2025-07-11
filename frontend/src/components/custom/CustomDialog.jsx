import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/Dialog";

const CustomDialog = ({item}) => {
  return (
    <Dialog>
      <DialogTrigger>{item.title}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
          <DialogDescription>
            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default CustomDialog