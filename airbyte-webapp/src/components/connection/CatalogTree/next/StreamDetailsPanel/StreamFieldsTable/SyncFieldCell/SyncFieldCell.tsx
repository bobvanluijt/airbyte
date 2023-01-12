import { useCallback } from "react";
import { FormattedMessage } from "react-intl";

import { CheckBox } from "components/ui/CheckBox";
import { Tooltip } from "components/ui/Tooltip";

import { SyncSchemaField, SyncSchemaFieldObject } from "core/domain/catalog";
import { SyncMode, DestinationSyncMode } from "core/request/AirbyteClient";

interface SyncFieldCellProps {
  field: SyncSchemaField;
  checkIsCursor: (path: string[]) => boolean;
  checkIsPrimaryKey: (path: string[]) => boolean;
  isFieldSelected: boolean;
  handleFieldToggle: (fieldPath: string[], isSelected: boolean) => void;
  syncMode?: SyncMode;
  destinationSyncMode?: DestinationSyncMode;
}

export const SyncFieldCell: React.FC<SyncFieldCellProps> = ({
  checkIsCursor,
  checkIsPrimaryKey,
  isFieldSelected,
  field,
  handleFieldToggle,
  syncMode,
  destinationSyncMode,
}) => {
  const isNestedField = SyncSchemaFieldObject.isNestedField(field);
  const isCursor = checkIsCursor(field.path);
  const isPrimaryKey = checkIsPrimaryKey(field.path);
  const isDisabled =
    (syncMode === SyncMode.incremental && isCursor) ||
    (destinationSyncMode === DestinationSyncMode.append_dedup && isPrimaryKey) ||
    isNestedField;

  const renderDisabledReasonMessage = useCallback(() => {
    if (isNestedField) {
      return <FormattedMessage id="form.field.sync.nestedFieldTooltip" values={{ fieldName: field.path[0] }} />;
    }
    if (isPrimaryKey) {
      return <FormattedMessage id="form.field.sync.primaryKeyTooltip" />;
    }
    if (isCursor) {
      return <FormattedMessage id="form.field.sync.cursorFieldTooltip" />;
    }
    return null;
  }, [isCursor, isPrimaryKey, isNestedField, field.path]);

  return (
    <>
      {!isDisabled && (
        <CheckBox
          checkboxSize="sm"
          checked={isFieldSelected}
          onChange={() => handleFieldToggle(field.path, !isFieldSelected)}
        />
      )}
      {isDisabled && (
        <Tooltip control={<CheckBox checkboxSize="sm" disabled checked={isFieldSelected} readOnly />}>
          {renderDisabledReasonMessage()}
        </Tooltip>
      )}
    </>
  );
};