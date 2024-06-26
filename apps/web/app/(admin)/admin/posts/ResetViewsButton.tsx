import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, useNotify, useUnselectAll, useUpdateMany } from 'react-admin';
function ResetViewsButton({
  resource,
  selectedIds,
}: {
  resource: any;
  selectedIds: number[];
}): React.JSX.Element {
  const notify = useNotify();
  const unselectAll = useUnselectAll(resource);
  const [updateMany, { isLoading }] = useUpdateMany(
    resource,
    { ids: selectedIds, data: { views: 0 } },
    {
      onSuccess: () => {
        notify('ra.notification.updated', {
          type: 'info',
          messageArgs: { smart_count: selectedIds.length },
          undoable: true,
        });
        unselectAll();
      },
      onError: (error: Error | string) =>
        notify(typeof error === 'string' ? error : error.message || 'ra.notification.http_error', {
          type: 'error',
        }),
      mutationMode: 'undoable',
    },
  );

  return (
    <Button label="simple.action.resetViews" disabled={isLoading} onClick={() => updateMany()}>
      <VisibilityOff />
    </Button>
  );
}

export default ResetViewsButton;
