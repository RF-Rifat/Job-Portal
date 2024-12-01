import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PlusCircle, Trash2 } from 'lucide-react'
import { Label } from "@/components/ui/label"
import JPInput from '@/shared/form/JPInput'

export function OnlinePresenceSection() {
  const [socialMediaUrls, setSocialMediaUrls] = useState<{ platform: string; url: string }[]>([])

  const addSocialMedia = () => {
    setSocialMediaUrls([...socialMediaUrls, { platform: '', url: '' }])
  }

  const removeSocialMedia = (index: number) => {
    setSocialMediaUrls(socialMediaUrls.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Website URL</Label>
        <JPInput name="websiteUrl" placeholder="Website URL" />
      </div>
      <div className="space-y-4">
        <Label>Social Media URLs</Label>
        <ScrollArea className="h-[200px] w-full rounded-md border p-4">
          {socialMediaUrls.map((_, index) => (
            <div key={index} className="flex items-center space-x-2 mb-4">
              <JPInput name={`socialMediaUrls.${index}.platform`} placeholder="Platform" className="flex-1" />
              <JPInput name={`socialMediaUrls.${index}.url`} placeholder="URL" className="flex-1" />
              <Button type="button" variant="ghost" size="icon" onClick={() => removeSocialMedia(index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </ScrollArea>
        <Button type="button" variant="outline" onClick={addSocialMedia} className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Social Media
        </Button>
      </div>
    </div>
  )
}

