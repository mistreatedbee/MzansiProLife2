import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// Select UI not required in this component currently
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Edit, Plus, Save, X, Eye
} from 'lucide-react';
import { toast } from 'sonner';
import { contentAPI } from '@/api/apiClient';

export default function ContentManagement() {
  const [selectedContent, setSelectedContent] = useState<any>(null);
  const [dialogMode, setDialogMode] = useState<'create' | 'edit' | 'view' | null>(null);
  const [contentData, setContentData] = useState<any>({});
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['content'],
    queryFn: () => contentAPI.list(),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => contentAPI.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['content'] });
      toast.success('Content updated successfully');
      setDialogMode(null);
      setSelectedContent(null);
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: any) => contentAPI.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['content'] });
      toast.success('Content created successfully');
      setDialogMode(null);
      setSelectedContent(null);
    },
  });

  const contents = Array.isArray(data)
    ? data
    : (data as any)?.data?.contents || (data as any)?.contents || [];

  const handleEdit = (content: any) => {
    setSelectedContent(content);
    setContentData({
      title: content.title,
      content: typeof content.content === 'string' ? content.content : JSON.stringify(content.content, null, 2),
      isPublished: content.isPublished
    });
    setDialogMode('edit');
  };

  const handleView = (content: any) => {
    setSelectedContent(content);
    setContentData({
      title: content.title,
      content: typeof content.content === 'string' ? content.content : JSON.stringify(content.content, null, 2),
      isPublished: content.isPublished
    });
    setDialogMode('view');
  };

  const handleCreate = () => {
    setSelectedContent(null);
    setContentData({
      key: '',
      type: 'page',
      title: '',
      content: '',
      isPublished: false,
    });
    setDialogMode('create');
  };

  const handleSave = () => {
    if (dialogMode === 'create') {
      createMutation.mutate(contentData);
      return;
    }

    if (selectedContent && dialogMode === 'edit') {
      updateMutation.mutate({
        id: selectedContent._id || selectedContent.id,
        data: contentData
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Content Management</h2>
        <Button className="bg-green-600 hover:bg-green-700 rounded-xl" onClick={handleCreate}>
          <Plus className="w-4 h-4 mr-2" />
          Add Content
        </Button>
      </div>

      {/* Content List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <div className="col-span-full text-center py-12">Loading content...</div>
        ) : contents.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">No content found</div>
        ) : (
          contents.map((content: any) => (
            <Card key={content._id || content.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{content.title || content.key}</CardTitle>
                    <Badge variant="outline" className="mt-2">
                      {content.type}
                    </Badge>
                  </div>
                  {content.isPublished ? (
                    <Badge className="bg-green-500">Published</Badge>
                  ) : (
                    <Badge variant="outline">Draft</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {typeof content.content === 'string' 
                    ? content.content 
                    : JSON.stringify(content.content).substring(0, 100)}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(content)}
                    className="flex-1 rounded-xl"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-xl"
                    onClick={() => handleView(content)}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Edit Dialog */}
      <Dialog open={dialogMode !== null} onOpenChange={(open) => !open && setDialogMode(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>
              {dialogMode === 'create' ? 'Create Content' : dialogMode === 'view' ? 'View Content' : `Edit Content: ${selectedContent?.key}`}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {dialogMode === 'create' && (
              <>
                <div>
                  <label className="text-sm font-medium mb-2 block">Key</label>
                  <Input
                    value={contentData.key || ''}
                    onChange={(e) => setContentData({ ...contentData, key: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Type</label>
                  <Input
                    value={contentData.type || ''}
                    onChange={(e) => setContentData({ ...contentData, type: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
              </>
            )}
            <div>
              <label className="text-sm font-medium mb-2 block">Title</label>
              <Input
                value={contentData.title || ''}
                onChange={(e) => setContentData({ ...contentData, title: e.target.value })}
                className="rounded-xl"
                disabled={dialogMode === 'view'}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Content</label>
              <Textarea
                value={contentData.content || ''}
                onChange={(e) => setContentData({ ...contentData, content: e.target.value })}
                rows={10}
                className="rounded-xl font-mono text-sm"
                disabled={dialogMode === 'view'}
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="published"
                checked={contentData.isPublished}
                onChange={(e) => setContentData({ ...contentData, isPublished: e.target.checked })}
                className="rounded"
                disabled={dialogMode === 'view'}
              />
              <label htmlFor="published" className="text-sm">Published</label>
            </div>
            <div className="flex gap-2">
              {dialogMode !== 'view' && (
                <Button
                  onClick={handleSave}
                  className="bg-green-600 hover:bg-green-700 rounded-xl flex-1"
                  disabled={updateMutation.isPending || createMutation.isPending}
                >
                  <Save className="w-4 h-4 mr-2" />
                  {dialogMode === 'create' ? 'Create Content' : 'Save Changes'}
                </Button>
              )}
              <Button
                variant="outline"
                onClick={() => setDialogMode(null)}
                className="rounded-xl"
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

