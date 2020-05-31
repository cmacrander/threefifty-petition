type SheetData = {
  id: string;
  name: string;
};

export const getSheetData = (
  sheetSnap: firebase.firestore.DocumentSnapshot,
): SheetData | undefined => {
  const data = sheetSnap.data();
  return data
    ? {
        id: sheetSnap.id,
        name: data.name || '',
      }
    : undefined;
};
