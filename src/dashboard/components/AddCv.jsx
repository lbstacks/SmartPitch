import { Loader, PlusCircleIcon } from 'lucide-react'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { v4 as uuidv4 } from 'uuid'
import GlobalApi from '../../../server/GlobalApi'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'





function AddCv() {
  const [openDialog, setOpenDialog] = useState(false);
  const [cvId, setCvId] = useState();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  const onCreate = async () => {
    setLoading(true)
    const uuid = uuidv4()
    const data = {
      title: cvId,
      cvId: uuid,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
    }
    GlobalApi.CreateNewCV(data).then(
      (res) => {
        console.log(res.data.data.documentId)
        if (res) {
          setLoading(false)
          setOpenDialog(false)
          navigation('/dashboard/cv/'+res.data.data.documentId+"/edit")
        }
      },
      (error) => {
        setLoading(false)

      },
    )
  }

  return (
    <div>
      <div
        className="
       p-14 py-24 border
       items-center
       flex justify-center
        rounded-lg bg-secondary h-[280px]
        hover:scale-105 transition-all
        hover:cursor-pointer
        hover:shadow-md
        "
        onClick={() => setOpenDialog(true)}
      >
        <PlusCircleIcon />
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Build Your Standout CV</DialogTitle>
            <DialogDescription>
              <p className="text-sm text-muted-foreground italic">
                Add a tilte
              </p>
              <Input
                className="my-2"
                placeholder="Ex. Software Engineer"
                onChange={(e) => setCvId(e.target.value)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button variant="ghost" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button disabled={!cvId || loading} onClick={() => onCreate()}>
                {loading ? <Loader className="animate-spin" /> : 'Create'}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddCv
